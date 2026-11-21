# Detailed solution - A008

$R_1$, the controlled source and $R_2$ form a single series loop; the input terminal only supplies the controlling voltage. Split the source voltage into an independent part, set by $v_{in}$, and a dependent part proportional to the voltage across $R_1$. The dependent part acts as an extra resistance in series with $R_1$, which is what the reduction rule removes by scaling $R_1$ by $1+A_v$. The remaining loop is a simple divider.

### Step 1 — Loop current and the KVL relation

Let $I$ flow from the top of $R_1$ through the source to the output node and down through $R_2$. Since $I$ leaves the top of $R_1$, it flows up through $R_1$, so

$$
v_{out}=IR_2,\qquad v_1=-IR_1 .
$$

The source has its + terminal on the $R_1$ side, so KVL across it reads

$$
v_1-v_{out}=A_v(v_{in}-v_1).
$$

### Step 2 — Circuit reduction

Write the source voltage as $A_vv_{in}-A_vv_1=A_vv_{in}+A_vR_1I$. The second term is proportional to the current through the source and $R_1$, so it is equivalent to a resistance $A_vR_1$ in series with $R_1$. That is the reduction rule: short the dependent part and replace $R_1$ by $(1+A_v)R_1$. What remains in the loop is the independent source $A_vv_{in}$, with the same orientation (+ on the $R_1$ side).

<!-- diagram: diagram-01.cir -->

The reduced circuit is a single loop: $(1+A_v)R_1$ from ground to node a, the source $A_vv_{in}$ from node a (+) to the output node (−), and $R_2$ from the output node to ground. To confirm the equivalence, substitute $v_1=-IR_1$ into the KVL relation of Step 1:

$$
-(1+A_v)R_1I-R_2I=A_vv_{in},
$$

which is exactly KVL around the reduced loop.

### Step 3 — Solve the reduced loop

$$
I=-\frac{A_vv_{in}}{(1+A_v)R_1+R_2},\qquad
v_{out}=IR_2=-\frac{A_vR_2}{R_2+(1+A_v)R_1}\,v_{in}.
$$

Hence

$$
\frac{v_{out}}{v_{in}}=-\frac{A_vR_2}{R_2+(1+A_v)R_1}
=-\frac{R_2}{R_1}\cdot\frac{1}{1+\dfrac{R_1+R_2}{A_vR_1}}.
$$

### Step 4 — Interpretation and limits

This is a finite-gain inverting amplifier. As $A_v\to\infty$ the source drives $v_1\to v_{in}$ to keep its output finite, the loop current approaches $-v_{in}/R_1$, and

$$
\frac{v_{out}}{v_{in}}\to-\frac{R_2}{R_1}.
$$

The second form above shows the fractional gain error, approximately $(R_1+R_2)/(A_vR_1)$ for large $A_v$. As a check at the other extreme, $A_v=0$ leaves no source in the loop and the output is zero, as the formula gives.
