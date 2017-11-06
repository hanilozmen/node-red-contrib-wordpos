module.exports = function(RED) {
    "use strict";
    var WordPos = require('wordpos');
    var wordpos = new WordPos();

    function WordPOSNode(n) {
        RED.nodes.createNode(this,n);
        this.on("input", function(msg) {
            var node = this;
            var endpoint;
            if(msg.endpoint !== null || msg.endpoint !== "") {
                endpoint = msg.endpoint;
            }
            if(n.endpoint !== null || n.endpoint !== "") {
                endpoint = n.endpoint;
            }
            
            
            if(endpoint === 'getPOS') {
                wordpos.getPOS(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'getNouns' ) {
            	wordpos.getNouns(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'getVerbs' ) {
            	wordpos.getVerbs(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'getAdjectives' ) {
            	wordpos.getAdjectives(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'getAdverbs' ) {
            	wordpos.getAdverbs(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'isNoun' ) {
            	wordpos.isNoun(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'isVerb' ) {
            	wordpos.isVerb(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'isAdjective' ) {
            	wordpos.isAdjective(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'isAdverb' ) {
            	wordpos.isAdverb(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookup' ) {
            	wordpos.lookup(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookupNoun' ) {
            	wordpos.lookupNoun(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookupVerb' ) {
            	wordpos.lookupVerb(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookupAdjective' ) {
            	wordpos.lookupAdjective(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookupAdverb' ) {
            	wordpos.lookupAdverb(msg.payload, function (result) {
                    msg.result = result;
                    node.send(msg);
                 });
            }else if(endpoint === 'lookupSynonyms' ) {
                wordpos.lookup(msg.payload, function (result) {
                    var resultArray = [];
                    if(result !== null) {
                        for(i=0; i< result.length; i++) {
                            for(k = 0; k < result[i].synonyms.length; k++) {
                                if(result[i].synonyms[k] !== msg.payload) {
                                    resultArray.push(result[i].synonyms[k]);
                                }
                            }
                        }
                    }

                    msg.result = resultArray;
                    node.send(msg);
                 });
            }else {
                    msg.result = "";
                    msg.error = "No endpoint specified";
                    node.send(msg);
            }
            
        });
    }
    RED.nodes.registerType("contrib-wordpos",WordPOSNode);
}