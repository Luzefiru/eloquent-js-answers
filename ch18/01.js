/*
The URL https://eloquentjavascript.net/author is configured to respond
with either plaintext, HTML, or JSON, depending on what the client asks for.

These formats are identified by the standardized media types text/plain,
text/html, and application/json.

Send requests to fetch all three formats of this resource. Use the headers
property in the options object passed to fetch to set the header named Accept
to the desired media type.

Finally, try asking for the media type application/rainbows+unicorns and
see which status code that produces.
*/

fetch('https://eloquentjavascript.net/author', {
  headers: { Accept: 'text/plain' },
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data); // My name is Marijn Haverbeke. You can email me at marijn@haverbeke.nl, or visit my website, https://marijnhaverbeke.nl/ .
  });

fetch('https://eloquentjavascript.net/author', {
  headers: { Accept: 'text/html' },
})
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });
/*

<!doctype html>

<div vocab="http://schema.org/" typeof="Person">
  <p><span property="name">Marijn Haverbeke</span>, <span
  property="jobTitle">Programmer</span></p>

  <p>You can reach me at <a href="mailto:marijn@haverbeke.nl"
  property="email">marijn@haverbeke.nl</a>, or visit my web page, <a
  href="https://marijnhaverbeke.nl/" property="url">marijnhaverbeke.nl</a>.</p>
</div>

*/

fetch('https://eloquentjavascript.net/author', {
  headers: { Accept: 'application/json' },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // {name: 'Marijn Haverbeke', email: 'marijn@haverbeke.nl', website: 'https://marijnhaverbeke.nl/'}
  });

fetch('https://eloquentjavascript.net/author', {
  headers: { Accept: 'application/rainbows+unicorns' },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // throws a 406 Error (Not Acceptable)
  });
