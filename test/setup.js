/**
 * @author https://github.com/acvetkov
 * @overview setup tests
 */

import chai from 'chai';
import sinon from 'sinon';

global.assert = chai.assert;
global.sinon = sinon;
global.sinon.assert.expose(global.assert, {prefix: ''});

import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
