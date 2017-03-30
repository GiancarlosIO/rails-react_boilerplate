import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import enzyme from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

function debugTest (wrapper) {
  let html = wrapper.html()
  return html
}

chai.use(chaiEnzyme(debugTest));

describe('test-app', () => {
  it('test', () => {
    expect(9).to.be.a('number');
  });
});
