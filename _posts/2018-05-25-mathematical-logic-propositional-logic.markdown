---
layout: post
title: Mathematical Logic - Propositional Logic
date: 2018-05-29 16:54:17 +0700
description: Propositional Logic
tags: [Mathematical Logic]
---
<p><b>Definition 1</b> A statement that is either true or false is called a <em>proposition</em></p>

<p>Not all sentences are propositions. Questions, exclamations, commands, or self-contradictory sentences like the following examples can neither be asserted nor be denied.</p>

<ul>
<li>Is mathematics logic?</li>
<li>Hey there!</li>
<li>Do not panic</li>
<li>This sentence is false</li>
<li>It is a triangle</li>
<li>x + 1 = 2</li>
<li>x + y = z</li>
</ul>

<ol>The following sentences are propositions
<li>Washington, D.C., is the capital of the United States of America</li>
<li>Toronto is the capital of Canada</li>
<li>1 + 1 = 2</li>
<li>2 + 2 = 3</li></ol>

<p>Propositions 1 and 3 are true, whereas 2 and 4 are false.</p>

<p><b>Definition 2</b> Let \(p\) be a proposition. The negation of \(p\), denoted by \(\neg p\) (also denoted by \(\overline{p}\)), is the statement "It is not the case that \(p\)". The proposition \(\neg p\) is read "not \(p\)". The truth value of the negation \(p\), \(\neg p\), is the opposite of the truth value of \(p\).</p>

<div style="overflow:auto;">
<p><b>Example 1</b><br>
Find the negation of the proposition \(\text{"Michael's PC runs linux"}\) and express this in simple english.
<br>
<b>Solution</b><br>
The negation is \(\text{"It is not the case that Michael's PC runs linux"}\). This negation can be more simple expressed as \(\text{"Michael's PC does not run linux"}\).</p>
</div>

<div style="overflow:auto;">
<p><b>Example 2</b><br>
Find the negation of the proposition \(\text{"Vandanna's smartphone has at least 32GB of memory"}\) and express this in simple English.<br>
<b>Solution</b><br>
The negation is \(\text{"It is not the case that Vandana's smartphone has at least 32GB of memory"}\). The negation also can be expressed as \(\text{"Vandana's smartphone doesn't have at least 32GB of memory"}\) or even more simply as \(\text{"Vandana's smartphone has less than 32GB of memory"}\).</p>
</div>

<p>The truth table for the negation of a Proposition.</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(\neg p\)</th>
</tr>
<tr>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
</tr>
</table>
</div>

<p><b>Definition 3</b> Let \(p\) and \(q\) be propositions. The conjunction of \(p\) and \(q\), denoted by \(p \land q\), is the proposition "\(p\) and \(q\)". The conjunction of \(p\) and \(q\) is true when both \(p\) and \(q\) are true and is false otherwise.</p>

<div style="overflow:auto;">
<p><b>Example 3</b><br>
Find the conjunction of the propositions \(p\) and \(q\) where \(p\) is the proposition \(\text{"Rebecca's PC has more than 16GB free hard disk space"}\) and \(q\) is the proposition \(\text{"The processor in Rebecca's PC runs faster than 1GHz"}\).<br>
<b>Solution</b><br>
The conjunction of these prepositions, \(p \land q\), is the preposition \(\text{"Rebecca's PC has more than 16GB free hard disk space, and the processor in Rebecca's PC runs faster than 1GHz"}\). This conjunction can be expressed more simply as \(\text{"Rebecca's PC has more than 1GB free hard disk space and its processor runs faster than 1GHz"}\). For this conjunction to be true, both conditions given must be true. It is false, when one or both of these conditions are false.</p>
</div>

<p>The truth table for the conjunction of two propositions.</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \land q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</table>
</div>

<p><b>Definition 4</b> Let \(p\) and \(q\) be propositions. The disjunction of \(p\) and \(q\), denoted by \(p \lor q\), is the proposition "p or q". The disjunction of \(p \lor q\) is false when both \(p\) and \(q\) are false and is true otherwise.</p>

<div style="overflow:auto;">
<p><b>Example 4</b><br>
What is the disjunction of the propositions \(p\) and \(q\) where \(p\) and \(q\) are the same propositions as in Example 3?<br>
<b>Solution</b><br>
The disjunction of \(p\) and \(q\), \(p \lor q\), is the proposition \(\text{"Rebecca's PC has at least 16GB free hard disk space, or the processor in Rebecca's PC runs faster than 1Ghz"}\).</p>
</div>

<p>The truth table for the disjunction of two propositions.</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \lor q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<table>
</div>

<p><b>Definition 5</b> Let \(p\) and \(q\) be propositions. The exclusive or of \(p\) and \(q\), denoted by \(p \oplus q\), is the proposition that is true when exactly one of \(p\) and \(q\) is true and is false otherwise.</p>

<p>The truth table for the exclusive or of two propositions.</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \oplus q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</table>
</div>

<p><b>Definition 6</b> Let \(p\) and \(q\) be propositions. The conditional statement \(p \implies q\) is the proposition "if \(p\), then \(q\)". The conditional statement \(p \implies q\) is false when \(p\) is true and \(q\) is false, and true otherwise. In the conditional statement \(p \implies q\), \(p\) is called the hypothesis (or antecedent or premise) and \(q\) is called the conslusion (or consequence).</p>

<div style="overflow:auto;">
<p><b>Example 5</b> <br>
Let \(p\) be the statement \(\text{"Maria learns discrete mathematics"}\) and \(q\) the statement \(\text{"Maria will find a good job"}\). Express the statement \(p \implies q\) as a statement in english.<br>
<b>Solution</b> <br>
\(p \implies q\) represents the statement \(\text{"if Maria learns discrete mathematics, then she will find a good
job"}\).</p>
</div>

<p>The truth table for the conditional statement of two prepositions.</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \implies q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</table>
</div>

<p>Given an conditional statement "if \(p\) , then \(q\)", we can create three related statements<br>
1. Converse: The proposition of \(q \implies p\) is called the converse of \(p \implies q\)<br>
2. Contrapositive: The proposition of \(\neg q \implies \neg p\) is called the contrapositive of \(p \implies q\)<br>
3. Inverse: The proposition of \(\neg p \implies \neg q\) is called the inverse of \(p \implies q\)</p>

<div style="overflow:auto;">
<p><b>Example 6</b> <br>
What are the converse, the contrapositive, and the inverse ot the conditional statement \(\text{"The home team wins
whenever it's raining"}\)?<br>
<b>Solution</b> <br>
Because "q whenever p" is one of the ways to express the conditional statement \(p \implies q\), the original statement can be rewritten as \(\text{"If t's raining then the home team wins"}\). The contrapositive of this conditional statement is \(\text{"If the home team does not win then it's not raining"}\). The converse is \(\text{"If the home team wins then it's raining"}\). The inverse is \(\text{"If is's not raining then the home team does not win"}\).</p>
</div>

<p>The truth table for the converse, the contrapositive, and the inverse of the conditional statement of two
propositions</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(\neg p\)</th>
<th>\(\neg q\)</th>
<th>\(p \implies q\)</th>
<th>\(q \implies p\)</th>
<th>\(\neg q \implies \neg p\)</th>
<th>\(\neg p \implies \neg q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
</div>

<p><b>Definition 7</b> Let \(p\) and \(q\) be propositions. The biconditional statement \(p \iff q\) is the proposition "\(p\) if and only if \(q\)". The biconditional statement \(p \iff q\) is true when \(p\) and \(q\) have the same truth values, and is false otherwise. Biconditional statements are also called bi-implications.</p>

<div style="overflow:auto;">
<p><b>Example 7</b> <br>
Let \(p\) be the statement \(\text{"You can take the flight"}\) and let \(q\) be the statement \(\text{"You buy a ticket"}\). Then \(p \iff q\) is the statement \(\text{"You can take the flight if and only if you buy a ticket"}\).</p>
</div>

<p>The truth table for the biconditional statement of two propositions</p>

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \iff q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
</tr>
</table>
</div>