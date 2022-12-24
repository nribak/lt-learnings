import type {AWS} from '@serverless/typescript';

import {
  createPostHandler,
  deletePostHandler,
  getAllImages,
  getAllPostHandler,
  getPostByIdHandler,
  imageRemove,
  imageUploader,
  updatePostHandler
} from '@functions/newsletter';

const serverlessConfiguration: AWS = {
  service: 'sls-newsletter',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: 'arn:aws:iam::914632565753:role/full-dynamo-access-role'
    }
  },
  // import the function via paths
  functions: { getAllPostHandler, getPostByIdHandler, createPostHandler, updatePostHandler, deletePostHandler, imageUploader, imageRemove, getAllImages },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
