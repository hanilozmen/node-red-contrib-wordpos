node-red-contrib-wordpos
===================

**Installation**

npm install --save node-red-contrib-wordpos

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
