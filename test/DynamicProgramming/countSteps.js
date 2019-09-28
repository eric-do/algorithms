import { countPaths } from '../../DynamicProgramming/countSteps';
import { expect } from 'chai';
import sinon from 'sinon';

describe('countPaths', () => {
  it('should return the correct number of steps for a postive n', () => {
    expect(countPaths(5)).to.equal(13);
  });

  it('should return the correct number of steps for a negative n', () => {
    expect(countPaths(-1)).to.equal(0);
  });

  it('should return the correct number of steps for a 0 n', () => {
    expect(countPaths(0)).to.equal(1);
  });
});