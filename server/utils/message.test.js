var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jane';
    var latitude = 14;
    var longitude = 18;
    var url = 'https://www.google.com/maps?q=14,18';
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});