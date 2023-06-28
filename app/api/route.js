import path from 'path';

import { promises as fs } from 'fs';

export const GET = async (request) => {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('file')
  
    const fileContents = await fs.readFile(jsonDirectory + `/${fileName}.json`, 'utf8');
    return new Response(fileContents, { status: 200 })  
  }