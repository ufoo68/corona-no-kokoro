#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CoronaNoKokoroStack } from '../lib/corona-no-kokoro-stack';

const app = new cdk.App();
new CoronaNoKokoroStack(app, 'CoronaNoKokoroStack');
