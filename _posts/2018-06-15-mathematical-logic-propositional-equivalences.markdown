---
layout: post
title: Mathematical Logic - Propositional Equivalences
date: 2018-06-15 16:54:17 +0700
description: Propositional Equivalences
tags: [Mathematical Logic]
---
**Definition 1** A compound proposition that is always true, no matter what the truth values of the propositional variables that occur in it, is called *tautology*. A compound proposition that is always false is called a *contradiction*. Acompound proposition that is neither a tautology nor a contradiction is called a *contingency*.

Examples of a tautology and a contradiction

<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(\neg p\)</th>
<th>\(p \lor \neg p\)</th>
<th>\(p \land \neg p\)</th>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
</tr>
</table>

<p><b>Definition 2</b> The compound propositions \(p\) and \(q\) are called <em>logically equivalent</em> if \(p \implies q\) is a tautology. The notation \(p \equiv q\) denotes that \(p\) and \(q\) are logically equivalent.</p>

<p><b>Example 1</b><br>
Show that \(\neg (p \lor q)\) and \(\neg p \land \neg q\) are logically equivalent.<br>
<b>Solution</b><br>
As you can see the truth table for these compound propositions displayed below, it follows that \(\neg (p \lor q) \implies (\neg p \land \neg q)\) is a tautology and these compound propositions are logically equivalent.</p>

Truth table for \(\neg (p \lor q)\) and \(\neg p \land \neg q\)

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \lor q\)</th>
<th>\(\neg (p \lor q)\)</th>
<th>\(\neg p\)</th>
<th>\(\neg q\)</th>
<th>\(\neg p \land \neg q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
</div>

<p><b>Example 2</b><br>
Show that \(p \implies q\) and \(\neg p \lor q\) are logically equivalent.<br>
<b>Solution</b><br>
As shown below, the truth values of \(p \implies q\) and \(\neg p \lor q\) agree, these compound propositions are logically equivalent.</p>

The truth table for \(p \implies q\) and \(\neg p \lor q\)

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(p \lor q\)</th>
<th>\(\neg (p \lor q)\)</th>
<th>\(\neg p\)</th>
<th>\(\neg q\)</th>
<th>\(\neg p \land \neg q\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
</table>
</div>

<p><b>Example 3</b><br>
Show that \(p \lor (q \land r)\) and \((p \lor q) \land (p \lor q)\) are logically equivalent. This is the
distributive law of disjunction over conjunction.<br>
<b>Solution</b><br>
As shown below, the truth values of \(p \implies q\) and \(\neg p \lor q\) agree, so these compound propositions are logically equivalent.</p>

The truth table for \(p \lor (q \land r)\) and \((p \lor q) \land (p \lor q)\)

<div style="overflow:auto;">
<table class="table table-bordered">
<tr>
<th>\(p\)</th>
<th>\(q\)</th>
<th>\(r\)</th>
<th>\(q \land r\)</th>
<th>\(p \lor (q \land r)\)</th>
<th>\(p \lor q\)</th>
<th>\(p \lor r\)</th>
<th>\((p \lor q) \land (p \lor r)\)</th>
</tr>
<tr>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
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
<td>T</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>T</td>
<td>F</td>
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
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
<td>T</td>
</tr>
<tr>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>T</td>
<td>F</td>
</tr>
<tr>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
<td>F</td>
</tr>
</table>
</div>


Table of Important Logical Equivalences

<table class="table table-bordered">
<tr>
<th>Equivalence</th>
<th>Name</th>
</tr>
<tr>
<td>
\(p \land \mathbf T \equiv p\)<br>
\(p \lor \mathbf F \equiv p\)
</td>
<td>Identity Laws</td>
</tr>
<tr>
<td>
\(p \lor \mathbf T \equiv \mathbf T\)<br>
\(p \land \mathbf F \equiv \mathbf F\)
</td>
<td>Domination Laws</td>
</tr>
<tr>
<td>
\(p \lor p \equiv p\)<br>
\(p \land p \equiv p\)
</td>
<td>Idempotent Laws</td>
</tr>
<tr>
<td>
\(\neg (\neg p) \equiv p\)
</td>
<td>Double Negation Law</td>
</tr>
<tr>
<td>
\(p \lor q \equiv q \lor p\)<br>
\(p \land q \equiv q \land p\)
</td>
<td>Commutative Laws</td>
</tr>
<tr>
<td>
\((p \lor q) \lor r \equiv p \lor (q \lor r)\)<br>
\((p \land q) \land r \equiv p \land (q \land r)\)
</td>
<td>Associative Laws</td>
</tr>
<tr>
<td>
\(p \lor (q \land r) \equiv (p \lor q) \land (p \land r)\)<br>
\(p \land (q \lor r) \equiv (p \land q) \lor ([ \land r)\)
</td>
<td>Distributive Laws</td>
</tr>
<tr>
<td>
\(\neg (p \land q) \equiv \neg p \lor \neg q\)<br>
\(\neg (p \lor q) \equiv \neg p \land \neg q\)
</td>
<td>De Morgan's Laws</td>
</tr>
<tr>
<td>
\(p \lor (p \land q) \equiv p\)<br>
\(p \land (p \lor q) \equiv p\)
</td>
<td>Absorption Laws</td>
</tr>
<tr>
<td>
\(p \lor \neg p \equiv \mathbf T\)<br>
\(p \land \neg p \equiv \mathbf F\)
</td>
<td>Negation Laws</td>
</tr>
<tr>
<td>
\(p \implies q \equiv \neg p \lor q\)<br>
\(p \implies q \equiv \neg q \implies \neg p\)<br>
\(p \lor q \equiv \neg p \implies q\)<br>
\(p \land q \equiv \neg (p \implies \neg q)\)<br>
\(\neg (p \implies q) \equiv p \land \neg q\)<br>
\((p \implies q) \land (p \implies r) \equiv p \implies (q \land r)\)<br>
\((p \implies r) \land (q \implies r) \equiv (p \lor q) \implies r\)<br>
\((p \implies q) \lor (p \implies r) \equiv p \implies (q \lor r)\)<br>
\((p \implies r) \lor (q \implies r) \equiv (p \land q) \implies r\)
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>
\(p \iff q \equiv (p \implies q) \land (q \implies p)\)<br>
\(p \iff q \equiv \neg p \iff \neg q\)<br>
\(p \iff q \equiv (p \land q) \lor (\neg p \land \neg q)\)<br>
\(\neg (p \iff q) \equiv p \iff \neg q\)
</td>
<td>&nbsp;</td>
</tr>
</table>

<p><b>Example 4</b><br>
Show that \(\neg (p \implies q)\) and \(p \land \neg q\) are logically equivalent.<br>
<b>Solution</b><br>
It's a lot easier if we use logical identities as shown in the table above to show that these compound propositions are logically equivalent.</p>

\begin{align}
\neg (p \implies q) & \equiv \neg (\neg p \lor q)\\\\\\
& \equiv \neg (\neg p) \land \neg q  && \text{by the second De Morgan law}\\\\\\
& \equiv p \land \neg q && \text{by the double negation law}
\end{align}

<p><b>Example 5</b><br>
Show that \(\neg (p \lor (\neg p \land q))\) and \(\neg p \land \neg q\) are logically equivalent.<br>
<b>Solution</b></p>

\begin{align}
\neg (p \lor (\neg p \land q)) & \equiv \neg p \land \neg (\neg p \land q) && \text{by the second De Morgan law}\\\\\\
& \equiv \neg p \land [\neg (\neg p) \lor \neg q] && \text{be the first De Morgan law}\\\\\\
& \equiv \neg p \land (p \lor \neg q) && \text{by the double negation law}\\\\\\
& \equiv (\neg p \land p) \lor (\neg p \land \neg q) && \text{by the second distributive law}\\\\\\
& \equiv \mathbf F \lor (\neg p \land \neg q) && \text{because \neg p \land p \equiv \mathbf F}\\\\\\
& \equiv (\neg p \land \neg q) \lor \mathbf F && \text{by the communitative law for disjunction}\\\\\\
& \equiv (\neg p \land \neg q) && \text{by the identity law for \mathbf F}
\end{align}

<p><b>Example 6</b><br>
Show that \((p \land q) \implies (p \lor q)\) is a tautology.<br>
<b>Solution</b><br>
we will use logical equivalences to show that it is logically equivalent to \(\mathbf T\).</p>

\begin{align}
(p \land q) \implies (p \lor q) & \equiv \neg (p \land q) \lor (p \lor q) && \text{because p \implies q \equiv \neg p \lor q}\\\\\\
& \equiv (\neg p \lor \neg q) \lor (p \lor q) && \text{by the first De Morgan law}\\\\\\
& \equiv (\neg p \lor p) \lor (\neg q \lor q) && \text{by the associative and communitative laws for disjunction}\\\\\\
& \equiv \mathbf T \lor \mathbf T\\\\\\
& \equiv \mathbf T
\end{align}

<p><b>Definition 3</b> A compound is <em>satisfiable</em> if there is an assignment of truth values to its variables that makes it true. When the compound proposition is false for all assignments of truth values to its variables, the compound proposition is <em>unsatisfiable</em></p>

<p><b>Example 7</b><br>
Determine whether the compound proposition \((p \lor \neg q) \land (q \lor \neg r) \land (r \lor \neg p)\) is satisfiable.<br>
<b>Solution</b><br>
Instead of using truth table to solve this problem, we will reason about truth values. Note that \((p \lor \neg q) \land (q \lor \neg r) \land (r \lor \neg p)\) is true when the three variables \(p\), \(q\), and \(r\) have the same truth value.
Hence, it is satisfiable.</p>