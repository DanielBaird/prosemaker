module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$DefaultTracer() {
    this.indentLevel = 0;
  }

  peg$DefaultTracer.prototype.trace = function(event) {
    var that = this;

    function log(event) {
      function repeat(string, n) {
         var result = "", i;

         for (i = 0; i < n; i++) {
           result += string;
         }

         return result;
      }

      function pad(string, length) {
        return string + repeat(" ", length - string.length);
      }

      if (typeof console === "object") {
        console.log(
          event.location.start.line + ":" + event.location.start.column + "-"
            + event.location.end.line + ":" + event.location.end.column + " "
            + pad(event.type, 10) + " "
            + repeat("  ", that.indentLevel) + event.rule
        );
      }
    }

    switch (event.type) {
      case "rule.enter":
        log(event);
        this.indentLevel++;
        break;

      case "rule.match":
        this.indentLevel--;
        log(event);
        break;

      case "rule.fail":
        this.indentLevel--;
        log(event);
        break;

      default:
        throw new Error("Invalid event type: " + event.type + ".");
    }
  };

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { prosemakerDoc: peg$parseprosemakerDoc },
        peg$startRuleFunction  = peg$parseprosemakerDoc,

        peg$c0 = function(f, s) { var sections = []
                sections.push(f)
                return {
                  type: 'document',
                  sections: sections.concat(s)
              } },
        peg$c1 = function(t) { return {
                type: 'section',
                condition: {
                  type: 'condition',
                  content: { type: 'always' }
                },
                chunks: t
              } },
        peg$c2 = function(c, t) { return {
                type: 'section',
                condition: c,
                chunks: t
              } },
        peg$c3 = function(r) { return r },
        peg$c4 = function(t) { return t },
        peg$c5 = function(p) { return {
                type: 'text',
                raw: p
              } },
        peg$c6 = "[[",
        peg$c7 = { type: "literal", value: "[[", description: "\"[[\"" },
        peg$c8 = "]]",
        peg$c9 = { type: "literal", value: "]]", description: "\"]]\"" },
        peg$c10 = function(c) { return c },
        peg$c11 = function(a) { return {
                type: 'condition',
                content: a
              }},
        peg$c12 = function(a) { return a },
        peg$c13 = function(n) { return n },
        peg$c14 = /^[Aa]/,
        peg$c15 = { type: "class", value: "[Aa]", description: "[Aa]" },
        peg$c16 = /^[Ll]/,
        peg$c17 = { type: "class", value: "[Ll]", description: "[Ll]" },
        peg$c18 = /^[Ww]/,
        peg$c19 = { type: "class", value: "[Ww]", description: "[Ww]" },
        peg$c20 = /^[Yy]/,
        peg$c21 = { type: "class", value: "[Yy]", description: "[Yy]" },
        peg$c22 = /^[Ss]/,
        peg$c23 = { type: "class", value: "[Ss]", description: "[Ss]" },
        peg$c24 = function() { return {
            type: 'always'
          }},
        peg$c25 = /^[Nn]/,
        peg$c26 = { type: "class", value: "[Nn]", description: "[Nn]" },
        peg$c27 = /^[Ee]/,
        peg$c28 = { type: "class", value: "[Ee]", description: "[Ee]" },
        peg$c29 = /^[Vv]/,
        peg$c30 = { type: "class", value: "[Vv]", description: "[Vv]" },
        peg$c31 = /^[Rr]/,
        peg$c32 = { type: "class", value: "[Rr]", description: "[Rr]" },
        peg$c33 = function() { return {
            type: 'never'
          }},
        peg$c34 = "{{",
        peg$c35 = { type: "literal", value: "{{", description: "\"{{\"" },
        peg$c36 = "}}",
        peg$c37 = { type: "literal", value: "}}", description: "\"}}\"" },
        peg$c38 = ",",
        peg$c39 = { type: "literal", value: ",", description: "\",\"" },
        peg$c40 = function(v, l) { return {
                type: 'replaceable',
                value: v,
                transforms: l
              } },
        peg$c41 = function(t) { return [t].concat(l) },
        peg$c42 = function(p) { return {
                type: 'transform',
                raw: p,
                args: []
              } },
        peg$c43 = function(p) { return {
                type: 'replaceableValue',
                raw: p.trim() // removes the trailing whitespace TODO: fix plainText?
              } },
        peg$c44 = /^[\n\t ]/,
        peg$c45 = { type: "class", value: "[\\n\\t ]", description: "[\\n\\t ]" },
        peg$c46 = function(ws) { return ws.join('') },
        peg$c47 = function(ws) { if (typeof ws === 'undefined') {
                return ''
              } else {
                return ws
              } },
        peg$c48 = /^[a-zA-Z 0-9\n\t.]/,
        peg$c49 = { type: "class", value: "[a-zA-Z 0-9\\n\\t\\.]", description: "[a-zA-Z 0-9\\n\\t\\.]" },
        peg$c50 = function(chars) { return chars.join('') },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer(),

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parseprosemakerDoc() {
      var s0, s1, s2, s3,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "prosemakerDoc",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parsefirstDocSection();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsedocSection();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsedocSection();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "prosemakerDoc",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "prosemakerDoc",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsefirstDocSection() {
      var s0, s1, s2,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "firstDocSection",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsecontentChunk();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsecontentChunk();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "firstDocSection",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "firstDocSection",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsedocSection() {
      var s0, s1, s2, s3,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "docSection",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseconditionExpression();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsecontentChunk();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsecontentChunk();
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c2(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "docSection",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "docSection",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsecontentChunk() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "contentChunk",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parsereplaceableExpression();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c3(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsetextChunk();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c4(s1);
        }
        s0 = s1;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "contentChunk",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "contentChunk",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsetextChunk() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "textChunk",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseplainText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c5(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "textChunk",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "textChunk",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseconditionExpression() {
      var s0, s1, s2, s3,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "conditionExpression",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c6) {
        s1 = peg$c6;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c7); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecondition();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c8) {
            s3 = peg$c8;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c9); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "conditionExpression",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "conditionExpression",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsecondition() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "condition",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseabsoluteCondition();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c11(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "condition",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "condition",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseabsoluteCondition() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "absoluteCondition",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parsealwaysCondition();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseneverCondition();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1);
        }
        s0 = s1;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "absoluteCondition",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "absoluteCondition",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsealwaysCondition() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "alwaysCondition",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseoptWS();
      if (s1 !== peg$FAILED) {
        if (peg$c14.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c16.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c18.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c19); }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c14.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c15); }
              }
              if (s5 !== peg$FAILED) {
                if (peg$c20.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c21); }
                }
                if (s6 !== peg$FAILED) {
                  if (peg$c22.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c23); }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseoptWS();
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c24();
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "alwaysCondition",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "alwaysCondition",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseneverCondition() {
      var s0, s1, s2, s3, s4, s5, s6, s7,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "neverCondition",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseoptWS();
      if (s1 !== peg$FAILED) {
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c27.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
          if (s3 !== peg$FAILED) {
            if (peg$c29.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c30); }
            }
            if (s4 !== peg$FAILED) {
              if (peg$c27.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c28); }
              }
              if (s5 !== peg$FAILED) {
                if (peg$c31.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c32); }
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseoptWS();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c33();
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "neverCondition",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "neverCondition",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsereplaceableExpression() {
      var s0, s1, s2, s3, s4, s5,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "replaceableExpression",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c34) {
        s1 = peg$c34;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseoptWS();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsereplaceable();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseoptWS();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c36) {
                s5 = peg$c36;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c3(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "replaceableExpression",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "replaceableExpression",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsereplaceable() {
      var s0, s1, s2, s3, s4,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "replaceable",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parsereplaceableValue();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseoptWS();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c38;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsetransformList();
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c40(s1, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "replaceable",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "replaceable",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsetransformList() {
      var s0, s1, s2, s3, s4, s5, s6, s7,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "transformList",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parsetransform();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parseoptWS();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c38;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseoptWS();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsetransform();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parseoptWS();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c38;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c39); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseoptWS();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsetransform();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c41(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "transformList",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "transformList",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsetransform() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "transform",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseplainText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c42(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "transform",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "transform",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parsereplaceableValue() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "replaceableValue",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseplainText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c43(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "replaceableValue",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "replaceableValue",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseWS() {
      var s0, s1, s2,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "WS",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = [];
      if (peg$c44.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c45); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c44.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c45); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c46(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "WS",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "WS",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseoptWS() {
      var s0, s1,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "optWS",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = peg$parseWS();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "optWS",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "optWS",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    function peg$parseplainText() {
      var s0, s1, s2,
          startPos = peg$currPos;

      peg$tracer.trace({
        type:     "rule.enter",
        rule:     "plainText",
        location: peg$computeLocation(startPos, startPos)
      });

      s0 = peg$currPos;
      s1 = [];
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c48.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c50(s1);
      }
      s0 = s1;

      if (s0 !== peg$FAILED) {
        peg$tracer.trace({
          type:   "rule.match",
          rule:   "plainText",
          result: s0,
          location: peg$computeLocation(startPos, peg$currPos)
        });
      } else {
        peg$tracer.trace({
          type: "rule.fail",
          rule: "plainText",
          location: peg$computeLocation(startPos, startPos)
        });
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError:   peg$SyntaxError,
    DefaultTracer: peg$DefaultTracer,
    parse:         peg$parse
  };
})();
