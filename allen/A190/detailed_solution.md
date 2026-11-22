# Detailed solution - A190

Because both amplifier inputs sit at 0 V, the resistor currents follow directly from $v_s$ and $v_o$. Write KCL at the n input and at the unloaded output node, combine with $i_o=A_i(i_p-i_n)$, and solve for $v_o/v_s$.

### Step 1 — Currents at the inputs and the output

The n input is at 0 V, so the current through $R_1$ (flowing from the source toward the n input, the direction of $i_1$) and the current through $R_2$ (flowing from $v_o$ toward the n input, the direction of $i_2$) are

$$
i_1=\frac{v_s}{R_1},\qquad i_2=\frac{v_o}{R_2}.
$$

Both enter the n input, so $i_n=i_1+i_2$. The p input is grounded and nothing else drives it, so $i_p=0$.

The output node connects only to the amplifier output and to $R_2$. With $i_o$ taken positive out of the amplifier, KCL there gives $i_o=i_2$, i.e. $v_o=R_2\,i_o$.

### Step 2 — Solving the loop

Substituting into the amplifier relation:

$$
i_o=A_i(i_p-i_n)=-A_i\left(\frac{v_s}{R_1}+i_o\right)
\quad\Rightarrow\quad
i_o=-\frac{A_i}{1+A_i}\,\frac{v_s}{R_1}.
$$

Hence

$$
\frac{v_o}{v_s}=-\frac{R_2}{R_1}\left(\frac{A_i}{1+A_i}\right)=-\frac{R_2/R_1}{1+1/A_i}.
$$

### Step 3 — Comparison with the noninverting connection

The magnitude and the dependence on $A_i$ are the same as in $v_{out}=\frac{R_2}{R_1}\frac{A_i}{1+A_i}v_{in}$: for $A_i\to\infty$ the gain approaches $R_2/R_1$, the relative error is $1/(1+A_i)$, and since the feedback is negative in both cases, a single-pole $A_i$ gives the same closed-loop bandwidth $\omega_A(1+A_o)$, independent of $R_2/R_1$. The only difference is the sign: here the signal enters the n (inverting) input together with the feedback current, so the stage inverts.
