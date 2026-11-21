# Detailed solution - A481

The node $v_X$ is connected only to capacitor plates and the op-amp input, so once the φ1 feedback switch opens its charge is conserved. Write the plate voltages of the four capacitors in φ1 and φ2, equate the charge on $v_X$, and evaluate the result for the given code.

### Step 1 — Resistor-string taps and decoding

The four equal resistors give taps at $V_{REF}$, $\tfrac34V_{REF}$, $\tfrac12V_{REF}$ and $\tfrac14V_{REF}$. Switch $A$ selects the upper pair of taps ($\bar A$ the lower pair) and $B$/$\bar B$ the tap within the pair; $C$ and $D$ do the same for $V_2$:

$$
V_1=\frac{2A+B+1}{4}V_{REF},\qquad V_2=\frac{2C+D+1}{4}V_{REF}.
$$

The φ1 switch of the upper $C/4$ capacitor connects to the $\tfrac14V_{REF}$ tap.

### Step 2 — Plate voltages in the two phases

In φ1 the op amp is in unity feedback, so $v_X=0$. The left-plate voltages are:

| Capacitor | φ1 | φ2 |
|---|---|---|
| $C$ ($V_{Analog}$ branch) | 0 | $V_{Analog}$ |
| $C$ ($V_1$ branch) | $V_1$ | 0 |
| $C/4$ (tap branch) | $V_{REF}/4$ | 0 |
| $C/4$ ($V_2$ branch) | 0 | $V_2$ |

### Step 3 — Charge conservation at $v_X$

The charge on the plates at $v_X$ is $\sum_kC_k(v_X-V_k)$. Equating its φ1 value ($v_X=0$) with its φ2 value (total capacitance $C+C+C/4+C/4=2.5C$):

$$
-C\,V_1-\frac C4\cdot\frac{V_{REF}}4=2.5C\,v_X-C\,V_{Analog}-\frac C4V_2
$$
$$
\Longrightarrow\quad
v_X=\frac25V_{Analog}-\frac25V_1+\frac{V_2}{10}-\frac{V_{REF}}{40}
=\frac25\left[V_{Analog}-V_1+\frac{V_2}{4}-\frac{V_{REF}}{16}\right].
$$

### Step 4 — Comparator decision for $ABCD=1011$

$A=1$, $B=0$ select $V_1=\tfrac34V_{REF}$; $C=D=1$ select $V_2=V_{REF}$. With $V_{Analog}=0.8V_{REF}$:

$$
v_X=\left(0.32-0.30+0.10-0.025\right)V_{REF}=+0.095\,V_{REF}>0 .
$$

Since $v_X$ drives the inverting input and the noninverting input is grounded, the open-loop comparator output is **low**. Equivalently, the DAC value $V_1-V_2/4+V_{REF}/16=0.5625V_{REF}$ is below the input.
