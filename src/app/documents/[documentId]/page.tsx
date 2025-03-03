import Editor from './editor';
import React from 'react'

interface DocumentIdPageProps {
  params: Promise<{documentId: string}>;
}

const DocumentPage = async ({params}: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      Document ID: {documentId}
      <Editor />
    </div>
  )
}

export default DocumentPage
