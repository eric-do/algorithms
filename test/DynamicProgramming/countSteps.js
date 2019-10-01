import { countPathsMemo, countPathsRecursive, countPathsDynammic } from '../../DynamicProgramming/countSteps';
import { expect } from 'chai';
import sinon from 'sinon';

describe('countPaths recursive', () => {
  it('should return the correct number of steps for a postive n', () => {
    expect(countPathsRecursive(5)).to.equal(13);
  });

  it('should return the correct number of steps for a negative n', () => {
    expect(countPathsRecursive(-1)).to.equal(0);
  });

  it('should return the correct number of steps for a 0 n', () => {
    expect(countPathsRecursive(0)).to.equal(1);
  });
});

describe('countPaths memo', () => {
  it('should return the correct number of steps for a postive n', () => {
    expect(countPathsMemo(5)).to.equal(13);
  });

  it('should return the correct number of steps for a negative n', () => {
    expect(countPathsMemo(-1)).to.equal(0);
  });

  it('should return the correct number of steps for a 0 n', () => {
    expect(countPathsMemo(0)).to.equal(1);
  });
});

describe('countPaths dynammic', () => {
  it('should return the correct number of steps for a postive n', () => {
    expect(countPathsDynammic(5)).to.equal(13);
  });

  it('should return the correct number of steps for a negative n', () => {
    expect(countPathsDynammic(-1)).to.equal(0);
  });

  it('should return the correct number of steps for a 0 n', () => {
    expect(countPathsDynammic(0)).to.equal(1);
  });
});