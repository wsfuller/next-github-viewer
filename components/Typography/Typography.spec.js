import { shallow, mount } from 'enzyme';
import Typography from '.';

describe('<Typography />', () => {
  it('variant h1 renders h1', () => {
    const wrapper = mount(<Typography variant="h1" />);
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
  });

  it('variant h2 renders h2', () => {
    const wrapper = mount(<Typography variant="h2" />);
    const elem = wrapper.find('h2');
    expect(elem.length).toBe(1);
  });

  it('variant h3 renders h3', () => {
    const wrapper = mount(<Typography variant="h3" />);
    const elem = wrapper.find('h3');
    expect(elem.length).toBe(1);
  });

  it('variant h4 renders h4', () => {
    const wrapper = mount(<Typography variant="h4" />);
    const elem = wrapper.find('h4');
    expect(elem.length).toBe(1);
  });

  it('variant h5 renders span', () => {
    const wrapper = mount(<Typography variant="h5" />);
    const elem = wrapper.find('span');
    expect(elem.length).toBe(1);
  });

  it('variant subtitle1 renders p', () => {
    const wrapper = mount(<Typography variant="subtitle1" />);
    const elem = wrapper.find('p');
    expect(elem.length).toBe(1);
  });

  it('variant body1 renders p', () => {
    const wrapper = mount(<Typography variant="body1" />);
    const elem = wrapper.find('p');
    expect(elem.length).toBe(1);
  });
});
