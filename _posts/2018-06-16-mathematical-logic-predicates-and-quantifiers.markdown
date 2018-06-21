---
layout: post
title: Mathematical Logic - Predicates and Quantifiers
date: 2018-06-21 09:01:17 +0700
description: Predicates and Quantifiers
tags: [Mathematical Logic]
---
<div style="overflow:auto;">
<p>Propositional logic is not powerful enough to represent all types of statements in mathematics, computer science and in natural language. For example, suppose that we know that \[\text{"Every computer connected to the university network is functioning properly"}\] No rules of propositional logic allow us to conclude the truth of the statement \[\text{"COMP1 is funtioning properly"}\] where \(\text{COMP1}\) is one of the computers connected to the university network.</p>
</div>

<p>Thus, we need more powerful logic called <em>Predicate Logic</em> to deal with these problems. Predicate logic deals with predicates, which are propositions containing variables.</p>

<h6>Predicates</h6>
<div style="overflow:auto;">
<p>Statements involving variables, such as \["x = y + 8"\] and \[\text{"Computer x is under attack by an intruder"}\] and \[\text{Computer x is functioning properly"}\] are often found in mathematical assetions, in computer programs, and in system specifications. These statements are neither true nor false when the values of the variables are not specified.</p></div>

<div style="overflow:auto;">
<p>The statement \[\text{"x is greater than 3"}\] has two parts. The first part, the variable \(x\), is the subject of the statement. The second part, the <b>predicate</b>, \[\text{"is greater than 3"}\], refers to a property that the subject of the statement can have. We can denote the statement \[\text{"x is greater than 3"}\] by \(P(x)\), where \(P\) denontes the predicate \[\text{"is greater than 3"}\] and \(x\) is the variable. The statement \(P(x)\) is said to be the value of the propositional function \(P\) at \(x\), the statement \(P(x)\) becomes a proposition and has a truth value.</p></div>

<p><b>Example 1</b><br>
Let \(P(x)\) denote the statement \(\text{"x > 3"}\). What are the truth values of \(P(4)\) and \(P(2)\)?<br>
<b>Solution</b><br>
We obtain the statement \(P(4)\) by setting \(x = 4\) in the statement \(\text{"x > 3"}\). Hence, P(4) is the statement \(\text{"4 > 3"}\), is true. However, \(P(2)\), which is the statement \(\text{"2 > 3"}\), is false.</p>

<p>A statement of the form \(P(x_1, x_2, \ldots, x_n)\) is the value of the propositional function \(P\) at the n-tuple \((x_1, x_2, \ldots, x_n)\), and \(P\) is also called an n-place predicate or a n-ary predicate.</p>

<div style="overflow:auto;">
<p><b>Example 2</b><br>
Let \(A(x)\) denote the statement \(\text{"Computer x is under attack by an intruder"}\). Suppose that of the computers on campus, only \(\text{COMP1}\) and \(\text{COMP3}\) are currently under attack by intruders. What are the truth values of \(A(COMP1)\), \(A(COMP2)\) and \(A(COMP3)\)?<br>
<b>Solution</b><br>
We obtain the statement \(A(COMP1)\) by setting \(x = COMP1\) in the statement \(\text{"Computer x is under attack by an intruder"}\). Because \(\text{COMP1}\) is on the list of computers under attack, we conclude that \(A(COMP1)\) is true. Similarly, because \(A(COMP2)\) is not on the list of computers under attack and \(A(COMP3)\) is on the list of computers under attack, we know that \(A(COMP2)\) is false and \(A(COMP3)\) is true.</p></div>

<h6>Quantifiers</h6>
<p>When the variables in a propositional function are assigned values, the resulting statement becomes a proposition with a certain truth value. To create a proposition from a propositional function is called quantification. In english, the words \(\text{all}\), \(\text{some}\), \(\text{many}\), \(\text{none}\) and \(\text{few}\) are used in quantifications. The area of logic that deals with predicates and quantifiers is called the predicate calculus.</p>

<p>Many mathematical statements assert that a property is true for all values of a variable in a particular domain, called the <b>domain of discourse</b> (or the <b>universe of discourse</b> or just <b>domain</b>). Such statements are expressed using universal quantification. The universal quantification of \(P(x)\) for a particular domain is the proposition that asserts that \(P(x)\) is true for all values of \(x\) in this domain.</p>

<p><b>Definition 1</b> The <em>universal quantification</em> of \(P(x)\) is the statement \[\text{"P(x) for all values of x in the domain"}\] The notation \(\forall x P(x)\) denotes the universal quantification of \(P(x)\). Here \(\forall\) is called the universal quantifier. We read \(\forall x P(x)\) as \(\text{"for all x P(x)"}\) or \(\text{"for every x P(x)"}\). An element or which \(P(x)\) is false is called a counterexample of \(\forall x P(x)\).</p>

<p>Besides \(\text{"for all"}\) and \(\text{"for every"}\), universal quantification can be expressed in many other ways, including \(\text{"all of"}\), \(\text{"for each"}\), \(\text{"given any"}\), \(\text{"for arbitrary"}\), and \(\text{"for each"}\)</p>

<p>A statement \(\forall x P(x)\) is false, where \(P(x)\) is a proposition function, if and only if \(P(x)\) is not always true when \(x\) is in the domain. One way to show that \(P(x)\) is not always true when \(x\) is in the domain is to find a counterexample to the statement \(\forall x P(x)\). Note that a single counterexample is all needed to establish that \(\forall x P(x)\) is false.</p>

<p><b>Example 3</b><br>
Let \(P(x)\) be the statement \(\text{"x + 1 > x"}\). What is the truth value of the quantification \(\forall x P(x)\), where the domain consists of all real numbers?<br>
<b>Solution</b><br>
Because \(P(x)\) is true for all real numbers \(x\), the quantification \(\forall x P(x)\) is true.</p>

<p><b>Example 4</b><br>
Let \(Q(x)\) be the statement \(\text{"x < 2"}\). What is the truth value of the quantification \(\forall x Q(x)\), where the domain consists of all real numbers?<br>
<b>Solution</b><br>
\(Q(x)\) is not true for every real number \(x\), because \(Q(3)\) is false. That is, \(x = 3\) is a counterexample for the statement \(\forall x Q(x)\). Thus \(\forall x Q(x)\) is false.</p>

<p>When all the elements in the domain can be listed--say, \(x_1, x_2, \ldots, x_n\)--it follows that the universal quantification \(\forall x P(x)\) is the same as the conjunction \[P(x_1) \land P(x_2) \land \dots \land P(x_n)\] because this conjunction is true if and only if \(P(x_1), P(x_2), \ldots, P(x_n)\) are all true.</p>

<p><b>Example 5</b><br>
What is the truth value of \(\forall x P(x)\), where \(P(x)\) is the statement \(\text{"\(x^2\) < 10"}\) and the domain consists of the positive integers not exceeding 4?<br>
<b>Solution</b><br>
The statement \(\forall x P(x)\) is the same as the conjunction \(P(1) \land P(2) \land P(3) \land P(4)\), because the domain consists of the integers 1,2,3 and 4. Because \(P(4)\), which is the statement \(\text{"\(4^2\) > 10"}\), is false, it follows that \(\forall x P(x)\) is false.</p>

<div style="overflow:auto;">
<p><b>Example 6</b><br>
What is the truth value of \(\forall x (x^2 > x)\) if the domain consists of all real numbers? What is the truth value of this statement if the domain consists of all integers?<br>
<b>Solution</b><br>
Because \((\frac{1}{2})^2 \not\geq \frac{1}{2}\) is false, the universal quantification \(\forall x (x^2 > x)\), where the domain consists of all real numbers, is false. Note that \(x^2 - x\) if and only if \(x^2 - x = x(x - 1) \geq 0\). Consequently, \(x^2 - x\) if and only if \(x \leq 0\) or \(x \geq 1\). It follows that \(\forall x (x^2 > x)\) is false if the domain consists of all real numbers (because the inequality is false for all real numbers \(x\) with \((0 < x < 1)\).<br>
If the domain consists of integers, \(\forall x(x^2 \geq x)\) is true, because there are no integers \(x\) with \(0 < x < 1\).
</p></div>

<p>Many mathematical statements assert that there is an element with a certain property. Such statements are expressed using existential quantification. With existential quantification, we form a proposition that is true if and only if \(P(x)\) is true for at least one value of \(x\) in the domain.</p>

<p><b>Definition 2</b> The <em>existential quantification</em> of \(P(x)\) is the statement \[\text{"There exists an element \(x\) in the domain such that P(x)"}\] The notation \(\exists x P(x)\) denotes the existential quantification of \(P(x)\). Here \(\exists\) is called the existential quantifier.</p>

<p>Besides \(\text{"there exists"}\), existential quantification can be expressed in many other ways, such as by using the words \(\text{"for some"}\), \(\text{"for at least one"}\), or \(\text{"there is"}\). The existential quantification \(\exists x P(x)\) is read as \[\text{"There is an \(x\) such that P(x)"}\] \[\text{"There is at least one \(x\) such that P(x)"}\] or \[\text{"For some \(x\) P(x)"}\]</p>

<p><b>Example 7</b><br>
Let \(Q(x)\) denotes the statement \(\text{"\(x = x + 1\)"}\). What is the truth value of the quantification \(\exists x Q(x)\), where the domain consists of all real numbers?<br>
<b>Solution</b><br>
Because \(Q(x)\) is false for every real number \(x\), \(\exists x Q(x)\) is false.</p>

<p>When all the elements in the domain can be listed--say, \(x_1, x_2, \ldots, x_n\)--the existential quantification \(\exists x P(x)\) is the same as the disjunction \[P(x_1) \land P(x_2) \land \dots \land P(x_n)\] because this conjunction is true if and only if at least one of \(P(x_1), P(x_2), \ldots, P(x_n)\) is true.</p>

<p><b>Example 8</b><br>
What is the truth value of \(\exists x P(x)\), where \(P(x)\) is the statement \(\text{"\(x^2 > 10\)"}\) and the universe of discourse consists of the positive integers not exceeding 4?<br>
<b>Solution</b><br>
Because the domain is \([1,2,3,4]\), the proposition \(\exists x P(x)\) is the same as the disjunction \(P(1) \lor P(2) \lor P(3) \lor P(4)\). Because \(P(4)\), which is the statement \(\text{"\(4^2 > 10\)"}\), is true, it follows that \(\exists x P(x)\) is true.</p>

<div style="overflow:auto;">
<p><b>Example 9</b><br>
What do the statements \(\forall x < 0(x^2 > 0)\), \(\forall y \not= 0(y^3 \not= 0)\), and \(\exists z > 0(z^2 = 2)\) mean, where the domain in each case consists of the real numbers?<br>
<b>Solution</b><br>
The statement \(\forall x < 0(x^2 > 0)\) states that for every real number \(x\) with \(x < 0\), \(x^2 > 0\). It
states "The square of a negative real number is positive". This statement is the same as \(\forall x(x < 0 \implies x^2 > 0)\).<br>
The statement \(\forall y \not= 0(y^3 \not= 0)\) states that for every real number \(y\) with \(y \not= 0\), we have \(y^3 \not= 0\). It states "The cube of every nonzero real number is nonzero". This statement is the same as \(\forall y(y \not= 0 \implies y^3 \not= 0)\).<br>
The statement \(\exists z > 0(z^2 = 2)\) states that there exits a real number \(z\) with \(z > 0\) such that \(z^2 = 2\). It states "There is a positive square root of 2". This statement is equivalent to \(\exists z(z > 0 \land z^2 = 2)\).</p></div>

<p>The quantifiers \(\forall\) and \(\exists\) have higher precedence than all logical operators from propositional calculus. For example, \(\forall x P(x) \lor Q(x)\) is the disjunction of \(\forall x P(x)\) and \(Q(x)\). In other words, it means \((\forall x P(x)) \lor Q(x)\) rather than \(\forall x(P(x) \lor Q(x))\).</p>

<p>In the statement \(\exists x(x + y = 1)\), the variable \(x\) is bound by the existential quantification \(\exists x)\), but the variable \(y\) is free because it is not bound by a quantifier and no value is assigned to this variable.</p>

<p><b>Definition 3</b> Statements involving predicates and quantifiers are <em>logically equivalent</em> if and only if they have the same truth value no matter which predicates are subtituted into these statements and which domain of discourse is used for the variables in these propositional functions. We use the notation \(S \equiv T\) to indicate that two statements \(S\) and \(T\) involving predicates and quantifiers are logically equivalent.</p>

<p>We can distribute a universal quantifier over a conjunction and we can also disribute an existential quantifier over a disjunction. However, we cannot distribute a universal quantifier over a disjunction, nor can we distribute an existential quantifier over a conjunction.</p>

<div style="overflow:auto;">
<p><b>Example 10</b><br>
Show that \(\forall x(P(x) \land Q(x))\) and \(\forall x P(x) \land \forall x Q(x)\) are logically equivalent (where the same domain is used)<br>
<b>Solution</b><br>
To show that these statements are logically equivalent, we must show that they always take the same truth value, no matter what the predicates \(P\) and \(Q\) are, no matter which domain of discourse is used. We can show that \(\forall x(P(x) \land Q(x))\) and \(\forall x P(x) \land \forall x Q(x)\) are logically equivalent by doing two things. First, we show that if \(\forall x(P(x) \land Q(x))\) is true, then \(\forall x P(x) \land \forall x Q(x)\) is true. Second we show that if \(\forall x P(x) \land \forall x Q(x)\) is true, then \(\forall x(P(x) \land Q(x))\) is true.<br>
Suppose that \(\forall x(P(x) \land Q(x))\) is true. This means that if \(a\) is in the domain, then \(P(a) \land Q(a)\) is true. Hence, \(P(a)\) is true and \(Q(a)\) is true. Because  is true. Hence, \(P(a)\) is true and \(Q(a)\) is true for every element in the domain, we can conclude that \(\forall x P(x)\) and \(\forall x Q(x)\) are both true. This means that \(\forall x P(x) \land \forall x Q(x)\) is true.<br>
Next, suppose that \(\forall x P(x) \land \forall x Q(x)\) is true. Hence, if \(a\) is in the domain, then \(P(a)\) and \(Q(a)\) are true. It follows that for all \(a\), \(P(a) \land Q(a)\) is true. It follows that \(\forall x(P(x) \land Q(x))\) is true.
</p></div>

<p>De Morgan's Laws for Quantifiers</p>

<table class="table table-bordered">
<tr>
<th>Negation</th>
<th>Equivalent Statement</th>
</tr>
<tr>
<td>\(\neg \exists x P(x)\)</td>
<td>\(\forall x \neg P(x)\)</td>
</tr>
<tr>
<td>\(\neg \forall x P(x)\)</td>
<td>\(\exists x \neg P(x)\)</td>
</tr>
</table>

<div style="overflow:auto;">
<p>To show that \(\neg \forall x P(x)\) and \(\exists x \neg P(x)\) are logically equivalent no matter what the propositional function \(P(x)\) is and what the domain is, first note that \(\neg \forall x P(x)\) is true if and only if \(\forall x P(x)\) is false. Next, note that \(\forall x P(x)\) is false if and only if there is an element \(x\) in the domain for which \(P(x)\) is false. This holds if and only if there is an element \(x\) in the domain for which \(\neg P(x)\) is true. Finally, note that there is an element \(x\) in the domain for which \(\neg P(x)\) is true if and only if \(\neg \exists x P(x)\) is true. So we can conclude that \(\neg \forall x P(x)\) is true if and only if \(\exists x \neg P(x)\) is true. It follows that \(\neg \forall x P(x)\) and \(\exists x \neg P(x)\) are logically equivalent.</p></div>

<div style="overflow:auto;">
<p>To show that \(\neg \exists x P(x)\) and \(\forall x \neg P(x)\) are logically equivalent no matter what \(P(x)\) is and what the domain is, first note that \(\neg \exists x P(x)\) is true if and only if \(\exists x P(x)\) is false. \(\exists x P(x)\) is true if and only if no \(x\) exists in the domain for which \(Q(x)\) is true. Next, note that no \(x\) exists in the domain for which \(Q(x)\) is true if and only if \(Q(x)\) is false for every \(x\) in the domain. Finally, note that \(Q(x)\) is false for every \(x\) in the domain if and only if \(\neg Q(x)\) is true for all \(x\) in the domain, which holds if and only if \(\forall x \neg P(x)\) is true. We see that \(\neg \exists x P(x)\) is true if and only if \(\forall x \neg P(x)\) is true. It follows that \(\neg \exists x P(x)\) and \(\forall x \neg P(x)\) are logically equivalent.</p></div>

<div style="overflow:auto;">
<p>When the domain of a predicate \(P(x)\) consists of \(n\) elements, where \(n\) is a positive integer greater than one, the rules for negating quantified elements are exactly the same as De Morgan's laws. This is why these rules are called De Morgan's laws for qunatifiers. When  the domain has \(n\) elements \(x_1, x_2, \ldots, x_n\), it follows that \(\neg \forall x P(x)\) is the same as \(\neg (P(x_1) \land P(x_2) \land \dots \land P(x_n))\), which is equivalent to \(\neg P(x_1) \lor \neg P(x_2) \lor \dots \lor \neg P(x_n)\) by De Morgan's laws, and this is the same as \(\exists x \neg P(x)\). Similarly \(\neg \exists x P(x)\) is the same as \(\neg (P(x_1) \lor P(x_2) \lor \dots \lor P(x_n))\), which by De Morgan laws is equivalent to \(\neg P(x_1) \land \neg P(x_2) \land \dots \land \neg P(x_n)\), and this is the same as \(\forall x \neg P(x)\).</p></div>

<p><b>Example 11</b><br>
What is the negation of the statement \(\text{"There is an honest politician"}\)?<br>
<b>Solution</b><br>
Let \(H(x)\) denote \(\text{"\(x\) is honest"}\). Then the statement \(\text{"There is an honest politician"}\) is represented by \(\exists x H(x)\), where the domain consists of all politicians. The negation of this statement is \(\neg \exists x H(x)\), which is equivalent to \(\forall x \neg H(x)\). This negation can be expressed as \(\text{"Every politician is dishonest"}\).
</p>

<p><b>Example 12</b><br>
What are the negations of the statements \(\forall x (x^2 > x)\) and \(\exists x (x^2 = 2)\)?<br>
<b>Solution</b><br>
The negation of \(\forall x (x^2 > x)\) is the statement \(\neg \forall x (x^2 > x)\), which is equivalent to \(\exists x \neg (x^2 > x)\) and can be rewritten as \(\exists x (x^2 \leq x)\). The negation of \(\exists x (x^2 = 2)\) is the statement \(\neg \exists x (x^2 = 2)\), which is equivalent to \(\forall x \neg (x^2 = 2)\) and can be rewritten as \(\forall x (x^2 \not= 2)\).
</p>

<div style="overflow:auto;">
<p><b>Example 13</b><br>
Show that \(\neg \forall x(P(x) \implies Q(x))\) and \(\exists x(P(x) \land Q(x))\) are logically equivalent.<br>
<b>Solution</b><br>
By De Morgan's laws for universal quantifiers, we know that \(\neg \forall x(P(x) \implies Q(x))\) and \(\exists x \neg (P(x) \implies Q(x))\) are logically equivalent. We know that \((P(x) \implies Q(x))\) and \((P(x) \land \neg Q(x))\) are logically equivalent for every \(x\). It follows that \(\neg \forall x(P(x) \implies Q(x))\) and \(\exists x(P(x) \land Q(x))\) are logically equivalent.</p></div>

<div style="overflow:auto;">
<p><b>Example 14</b><br>
Express the statement \(\text{"Every student in this class has studied calculus"}\) using predicates and quantifiers.<br>
<b>Solution</b><br>
First, we rewrite the statement so that we can clearly identify the appropriate quantifiers to use. Doing so, we obtain: \[\text{"For every student in this class, that student has studied calculus"}\] Next, we introduce a variable \(x\) so that our statement becomes \[\text{"For every student x in this class, x has studied calculus"}\] We introduce \(C(x)\), which is the statement \(\text{"x has studied calculus"}\). Consequently, if the domain for \(x\) consists of the students in the class, we can translate our statement as \(\forall x C(x)\).<br>
If we change the domain to consist of all people, we will need to express our statement as \[\text{"For every person x, if the person x is a student in this class then x has studied calculus"}\] If \(S(x)\) represents the statement that person \(x\) is in this class, we can express the statement as \(\forall x(S(x) \implies C(x))\).<br>
We may prefer to use two-variable quantifier \(Q(x, y)\) for the statement \(\text{"student x has studied subject y"}\). Then we can replace \(C(x)\) by \(Q(x, calculus)\) in both approaches to obtain \(\forall x Q(x, calculus)\) and \(\forall x(S(x) \implies Q(x, calculus))\).</p></div>

<div style="overflow:auto;">
<p><b>Example 15</b><br>
Consider these statements. The first two are called premises and the third is called the conclusion. The entire set is called an argument. \[\text{"All lions are fierce"}\] \[\text{"Some lions don't drink coffee"}\] \[\text{"Some fierce creatures do not drink coffee"}\] Let \(P(x)\), \(Q(x)\), and \(R(x)\) be the statements \(\text{"x is a lion"}\), \(\text{"x is fierce"}\), and \(\text{"x drinks coffee"}\) respectively. Assuming the domain consists of all creatures, express the statements in the argument using quantifiers and \(P(x)\), \(Q(x)\), and \(R(x)\).<br>
<b>Solution</b><br>
We can express these statements as: \[\forall x(P(x) \implies Q(x))\] \[\exists x(P(x) \land \neg R(x))\] \[\exists x(Q(x) \land \neg R(x))\]
Notice that the second statement cannot be written as \(\exists x(P(x) \implies \neg R(x))\). The reason is that \(P(x) \implies \neg R(x)\) is true whenever \(x\) is not a lion, so that \(\exists x(P(x) \implies \neg R(x))\) is true as long as there is at least one creature that is not a lion, even if every lion drinks coffee. Similarly, the third statement cannot be written as \[\exists x(Q(x) \implies \neg R(x))\].</p></div>

<p>In working with quantifications of more than one variable, it is helpful to think in terms of nested loops. For example, to see whether \(\forall x \forall y P(x, y)\) is true, we loop through the values for \(x\), and for each \(x\) we loop through the values for \(y\). If we find that \(P(x, y)\) is true for all values for \(x\) and \(y\), we have determined that \(\forall x \forall y P(x, y)\) is true. If we ever hit a value \(x\) for which we hit a value \(y\) for which \(P(x, y)\) is false, we have shown that \(\forall x \forall y P(x, y)\) is false.</p>

<p>Similarly, to determine whether \(\forall x \exists y P(x, y)\) is true, we loop through the values for \(x\). For each \(x\) we loop through the values for \(y\) until we find a \(y\) for which \(P(x, y)\) is true. If for every \(x\) we hit such a \(y\), then \(\forall x \exists y P(x, y)\) is true; if for some \(x\) we never hit such a \(y\) , then \(\forall x \exists y P(x, y)\) is false.</p>

<p>To see whether \(\exists x \forall y P(x, y)\), we loop through the values for \(x\) until we find an \(x\) for which \(P(x, y)\) is always true when we loop through all values for \(y\). Once we find such an \(x\), we know that \(\exists x \forall y P(x, y)\) is true. If we never hit such an \(x\), then we know that \(\exists x \forall y P(x, y)\) is false.<p>

 <p>Finally, to see whether \(\exists x \exists y P(x, y)\) is true, we loop through the values for \(x\), where for each \(x\) we loop through the values for \(y\) until we hit an \(x\) for which we hit a \(y\) for which \(P(x, y)\) is true. The statement \(\exists x \exists y P(x, y)\) is false only if we never hit an \(x\) for which we hit a \(y\) such that \(\exists x \exists y P(x, y)\) is true.</p>

<div style="overflow:auto;">
<p><b>Example 16</b><br>
Translate into english the statement \(\forall x \forall y((x > 0) \land (y < 0) \implies (xy <0))\) where the domain for both variables consist of all real numbers.<br>
<b>Solution</b><br>
This statement says that for every real number \(x\) and for every real number \(y\), if \(x > 0\) and \(y < 0\), then \(xy < 0\). This can be stated succinctly as "The product of a positive real number and a negative real number is always a negative real number".</p></div>

<div style="overflow:auto;">
<p><b>Example 17</b><br>
Let \(P(x, y)\) be the statement \(\text{"x + y = y + x"}\). What are the truth values of the quantifications \(\forall x \forall y P(x, y)\) and \(\forall y \forall x P(x, y)\) where the domain for all variables consists of all real numbers?<br>
<b>Solution</b><br>
Because \(P(x, y)\) is true for all real numbers \(x\) and \(y\), the proposition \(\forall x \forall y P(x, y)\) is true. Note that the statement \(\forall y \forall x P(x, y)\) says \(\text{"For all real numbers y, for all real numbers x, x + y = y + x"}\). This has the same meaning as the statement \(\text{"For all real numbers x, for all real numbers y, x + y = y + x"}\). That is, \(\forall x \forall y P(x, y)\) and \(\forall y \forall x P(x, y)\) have the same meaning, and both are true.</p></div>

<div style="overflow:auto;">
<p><b>Example 18</b><br>
Let \(Q(x, y, z)\) be the statement \(\text{"x + y = z"}\). What are the truth values of the statements \(\forall x \forall y \exists z Q(x, y, z)\) and \(\exists z \forall x \forall y Q(x, y, z)\), where the domain of all variables consists of all real numbers?<br>
<b>Solution</b><br>
The quantification \(\forall x \forall y \exists z Q(x, y, z)\), which is the statement \(\text{"For all real numbers x and for all real numbers y there is a real number z such that x + y = z"}\) is true.<br>
The quantification \(\exists z \forall x \forall y Q(x, y, z)\), which is the statement \(\text{"There is a real number \(z\) such that for all real numbers \(x\) and for all real numbers \(y\) it is true that \(x + y = z\)"}\) is false, because there is no value of \(z\) that satisfies the equation \(x + y = z\) for all value of \(x\) and \(y\).</p>
</div>

<div style="overflow:auto;">
<p><b>Example 19</b><br>
Translate the statement "The sum of two positive integers is always positive" into a logical expression.<br>
<b>Solution</b><br>
First, we rewrite it so that the implied quantifiers and a domain are shown: \(\text{"For every two integers, if these integers are both positive, then the sum of these integers is positive"}\). Next, we introduce the variables \(x\) and \(y\) to obtain \(\text{"For all positive numbers x and y, x + y is positive". We can express this statement as \[\forall x \forall y ((x > 0) \land (y > 0) \implies (x + y > 0))\] where the domain for both variables consists of all integers. We could also translate this using the positive integers as the domain. Then the statement becomes \(\text{"For every two positive integers, the sum of these integers is positive"}\). We can express this as \[\forall x \forall y (x + y > 0)\] where the domain for both variables consists of all positive integers.
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 20</b><br>
Translate the statement "Every real number except zero has a multiplicative inverse" (A multiplicative inverse of a real number \(x\) is a real number \(y\) such that \(xy = 1\).<br>
<b>Solution</b><br>
First, we rewrite this as \(\text{"For every real number x except zero, x has a multiplicative inverse"}\). We can rewrite this as \(\text{"For every real number x, if \(x \not= 0\), then there exists a real number y such that xy = 1". This can be written as \[\forall x ((x \not= 0) \implies \exists y (xy = 1))\]
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 21</b><br>
Translate the statement \[\forall x(C(x) \lor \exists y(C(y) \land F(x, y)))\] into english, where \(C(x)\) is \(\text{"x has a computer"}\), \(F(x, y)\) is \(\text{"x and y are friends"\), and the domain for both \(x\) and \(y\) consists of all students in your school.<br>
<b>Solution</b><br>
The statement says that for every student \(x\) in your school, \(x\) has a computer or there is a student \(y\) such that \(y\) has a computer and \(x\) and \(y\) are friends. In other words, every student in your school has a computer or has a friend who has a computer.</p>
</div>

<div style="overflow:auto;">
<p><b>Example 22</b><br>
Translate the statement \[\exists x \forall y \forall z((F(x, y) \land F(x, z) \land (y \not= z)) \implies \neg F(y, z))\] into english, where \(F(a, b)\) means \(a\) and \(b\) are friends and the domain for \(x\), \(y\), and \(z\) consists of all students in your school.<br>
<b>Solution</b><br>
The statement \((F(x, y) \land F(x, z) \land (y \not= z)) \implies \neg F(y, z)\) says that if student \(x\) and \(y\) are friends, and student \(x\) and \(z\) are friends, and futhermore if \(y\) and \(z\) are not the same student, then \(y\) and \(z\) are not friends. It follows that the original statement, which is triply quantified, says that there is a student \(x\) such that for all students \(y\) and students \(z\) other than \(y\), if \(x\) and \(y\) are friends and \(x\) and \(z\) are friends, then \(y\) and \(z\) are not friends. In other words, there is a student none of whose friends are also friends with each other.</p>
</div>

<div style="overflow:auto;">
<p><b>Example 23</b><br>
Express the statement "if a person is female and is a parent, then this person is someone's mother" as a logical expression involving predicates, quantifiers with a domain consisting of all people and logical connectives.<br>
<b>Solution</b><br>
The statement can be expressed as \(\text{"For every person x, if peson x is female and person x is a parent, then there exists a person y such that the person x is the mother of person y"}\). We introduce the proposition functions \(F(x)\) to represent \(\text{"x is female"}\), \(P(x)\) to represent \(\text{"x is a parent"}\) and \(M(x, y)\) to represent \(\text{"x is mother of y"}\). The original statement can be represented as \[\forall x((F(x) \land P(x)) \implies \exists y M(x, y))\] We can move \(\exists y\) to the left so that it appears after \(\forall x\), because \(y\) does not appear in \(F(x) \land P(x)\). We obtain the logically equivalent expression \[\forall x \exists y((F(x) \land P(x)) \implies M(x, y))\]
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 24</b><br>
Express the statement "Everyone has exactly one best friend" as a logical expression involving predicates, quantifiers with a domain consisting of all people and logical connectives.<br>
<b>Solution</b><br>
The statement can be expressed as \(\text{"For every person x, peson x has exactly one best friend"}\). To say that \(x\) has exactly one best friend means that there is a person \(y\) who is the best friend of \(x\), and furthermore, that for every person \(z\), if person \(z\) is not person \(y\), then \(z\) is not the best friend of \(x\). We introduce the predicate \(B(x, y)\) to be the statement \(\text{"y is the best friend of x"}\), the statement that \(x\) has exactly one best friend can be represented as \[\exists y(B(x, y) \land \forall z((z \not= y) \implies \neg B(x, y)))\] The original statement can be written as \[\forall x \exists y(B(x, y) \land \forall z((z \not= y) \implies \neg B(x, y)))\]
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 25</b><br>
Use quantifiers to express the statement "There is a woman who has taken a flight on every airline in the world".<br>
<b>Solution</b><br>
Let \(P(w, f)\) be \(\text{"w has taken f"}\) and \(Q(f, a)\) be \(\text{"f is a flight on a"}\). We can express the statement as \[\exists w \forall a \exists f(P(w, f) \land Q(f, a))\] where the domains of discourse for \(w\), \(f\), and \(a\) consist of all women in the world, all airplane flights, and all airlines, respectively.<br>
The statement could also be expressed as \[\exists w \forall a \exists f R(w, f, a)\] where \(R(w, f, a)\) is \(\text{"w has taken f on a"}\). Although this is more compact, it somewhat obscures the relationships among the variables. Consequently, the first solution is usually preferable.
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 26</b><br>
Express the negation of the statement \(\forall x \exists y(xy = 1)\) so that no negation precedes a quantifier.<br>
<b>Solution</b><br>
By applying De Morgan's laws, we find that \(\neg \forall x \exists y(xy = 1)\) is equivalent to \(\exists x \neg \exists y(xy = 1)\), which is equivalent to \(\exists x \forall y \neg (xy = 1)\). Because \(\neg (xy = 1)\) can be expressed more simply as \(xy \not= 1\), so the statement can be expressed as \(\exists x \forall y (xy \not= 1)\).
</p>
</div>

<div style="overflow:auto;">
<p><b>Example 27</b><br>
Use quantifiers to express the statement that "There does not exist a woman who has taken a flight on every airplane in the world".<br>
<b>Solution</b><br>
This statement is the negation of the statement "There is a woman who has taken a flight on every airplane in the world" from Example 25. By Example 25, that statement is expressed as \(\exists w \forall a \exists f(P(w, f) \land Q(f, a))\). By applying De Morgan's laws, we find the statement "There does not exist a woman who has taken a flight on every airplane the world" is equivalent to each of this sequence of statements:
 \begin{align}
 \neg \exists w \forall a \exists f(P(w, f) \land Q(f, a)) & \equiv \forall w \neg \forall a \exists f(P(w, f) \land Q(f, a))\\
 & \equiv \forall w \exists a \neg \exists f(P(w, f) \land Q(f, a))\\
 & \equiv \forall w \exists a \forall f \neg (P(w, f) \land Q(f, a))\\
 & \equiv \forall w \exists a \forall f(\neg P(w, f) \lor \neg Q(f, a))
 \end{align}
</p>
</div>