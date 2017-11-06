node-red-contrib-wordpos
===================

**Installation**

npm install node-red-contrib-wordpos

**Usage**

This package is written to be used in Node-Red framework. It uses npm package https://github.com/moos/wordpos (It uses WordNet database ) for extracting information in js part.

It takes <code>msg.payload</code> and <code>msg.endpoint</code> as parameters and outputs related information.
The resulting message can be found at <code>msg.result</code> 

 Available endpoints are presented below: 
 
 1. getPOS
 
 2. getNouns
 
 3. getVerbs
 
 4. getAdjectives
 
 5. getAdverbs
 
 6. isNoun
 
 7. isVerb
 
 8. isAdjective
 9. isAdverb
 10. lookupSynonyms
 11. lookup
 12. lookupNoun
 13. lookupVerb
 14. lookupAdjective
 15. lookupAdverb

----------

MIT License

Copyright (c) 2017 hanilozmen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
