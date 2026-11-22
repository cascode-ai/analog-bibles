# Detailed solution - G319

With the current buffer, $C$ senses the output voltage but returns its current to node ① without loading that node with capacitance and without a forward path through $C$. Write the two node equations to get the transfer function and its poles. Then apply the 45° condition with the loop crossover $\omega_c\approx f g_{m1}/C$, and check the result with the exact two-pole phase.

### Step 1 — Node equations and transfer function

Take $v_1$ at node ① and let $Y_1=1/R_1+sC_1$, $Y_2=1/R_2+sC_2$. The buffer takes the current $i_c=sCv_o$ out of the output node through $C$ and injects it into node ①:
$$
\begin{aligned}
\text{node 1:}&\quad i_s+sCv_o=Y_1v_1,\\
\text{output:}&\quad -g_{m6}v_1=Y_2v_o+sCv_o .
\end{aligned}
$$
From the second equation, $v_1=-v_o(Y_2+sC)/g_{m6}$. Substituting into the first and multiplying by $R_1R_2$:
$$
\frac{v_o}{i_s}=\frac{-g_{m6}R_1R_2}{1+s\left[R_1C_1+R_2(C+C_2)+g_{m6}R_1R_2C\right]+s^2R_1R_2C_1(C_2+C)} .
$$
There is no zero: no current reaches the output directly through $C$. The feedback is negative: a rise in $v_o$ injects current into node ①, which raises $v_1$ and, through the inverting $M_6$, lowers $v_o$.

### Step 2 — Poles

The term $g_{m6}R_1R_2C$ dominates the $s$ coefficient, so the poles are widely split:
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C},\qquad
p_2\approx-\frac{g_{m6}R_1R_2C}{R_1R_2C_1(C+C_2)}=-\frac{g_{m6}}{C+C_2}\cdot\frac{C}{C_1}.
$$
Compared with Miller compensation, where $|p_2|\approx g_{m6}/(C_1+C_2)$, $p_2$ is larger by roughly $C/C_1$ times $(C_1+C_2)/(C+C_2)$. This is because $C$ no longer shunts node ①, whose only capacitance is now the small $C_1$.

### Step 3 — Loop crossover

$a_0=g_{m1}R_1g_{m6}R_2=2\times10^4$, so the loop gain is $T_0=f a_0=10^4$. Above $|p_1|$, $|T|$ falls at $-20$ dB/dec. Ignoring $p_2$, it crosses unity at
$$
\omega_c\approx T_0|p_1|=\frac{f\,g_{m1}}{C}=\frac{0.5\,g_{m1}}{C}.
$$

### Step 4 — 45° design rule

The phase above $|p_1|$ is $-90^\circ-\tan^{-1}(\omega/|p_2|)$. The 45° rule $\omega_c=|p_2|$ gives
$$
\frac{0.5\,g_{m1}}{C}=\frac{g_{m6}C}{C_1(C+C_2)}\quad\Rightarrow\quad g_{m6}C^2=0.5\,g_{m1}C_1(C+C_2).
$$
In mA/V and pF, $2C^2=0.025\,(C+8)$, that is
$$
2C^2-0.025C-0.2=0\quad\Rightarrow\quad C=\frac{0.025+\sqrt{0.025^2+1.6}}{4}=0.32\ \mathrm{pF}.
$$
Then $|p_2|=\omega_c=7.75\times10^8$ rad/s (123 MHz).

### Step 5 — Exact phase margin and comparison

Evaluating $T(j\omega)=T_0/D(j\omega)$ with the full quadratic denominator:

| $C$ (pF) | Poles (rad/s) | Crossover (MHz) | Phase margin |
|---|---|---|---|
| 0.25 | $-9.2\times10^4$, $-6.6\times10^8$ | 104 | 45.2° |
| 0.32 | $-7.3\times10^4$, $-8.2\times10^8$ | 94 | 54.1° |

So $C\approx0.32$ pF by the design rule, which gives about 54° of actual margin, and $C\approx0.25$ pF for exactly 45°. Both are about one third of the Miller-compensated values for the same circuit and the same $f$ (1.1 pF and 0.76 pF). The smaller $C$ also raises the crossover frequency, since $\omega_c\approx f g_{m1}/C$.
