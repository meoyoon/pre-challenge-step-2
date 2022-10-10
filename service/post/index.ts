import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import { unified } from 'unified';

import parse from 'remark-parse';

export interface PostData {
  id: string;
  meta: Record<string, string>;
  contentHtml: string;
}

const BASE_POST_PATH = '__posts/';

export function getPostById(id: string) {
  const fullPath = path.join(BASE_POST_PATH, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const markdownToHtml = unified()
    .use(parse)
    .use(remarkHtml)
    .processSync(matterResult.content).value;

  return {
    id,
    meta: matterResult.data,
    contentHtml: markdownToHtml,
  };
}

export function getAllPostList() {
  const fileList = fs.readdirSync(BASE_POST_PATH);
  const fileListWithoutExtension = fileList.map((fileName) =>
    fileName.replace('.md', '')
  );

  return fileListWithoutExtension;
}
