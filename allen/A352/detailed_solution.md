# Detailed solution - A352

Two relations fix the two input-device currents: KCL at the common source, where the tail now carries $I_5$ plus the boost current, and the weak-inversion exponential law, which fixes their ratio. Solve them for $i_1$, form $i_{OUT}=b(i_2-i_1)$, and then solve for the input that gives $5I_5$.

### Step 1 — The two equations

For $v_{IN}>0$, M28 adds $A(i_2-i_1)$ to the tail and M29 is off, so KCL at the sources of the input pair gives

$$
i_1+i_2=I_5+A(i_2-i_1).
$$

With the same source voltage and $\exp$ law for both devices,

$$
\frac{i_2}{i_1}=x,\qquad x\equiv\exp\Bigl(\frac{v_{IN}}{nV_t}\Bigr).
$$

### Step 2 — Solve for the currents

Substituting $i_2=x\,i_1$:

$$
i_1(1+x)=I_5+A\,i_1(x-1)\quad\Rightarrow\quad i_1=\frac{I_5}{(1+A)-(A-1)x}.
$$

Then $i_2-i_1=i_1(x-1)$, so

$$
i_{OUT}=b(i_2-i_1)=\frac{bI_5\Bigl[\exp\Bigl(\dfrac{v_{IN}}{nV_t}\Bigr)-1\Bigr]}{(1+A)-(A-1)\exp\Bigl(\dfrac{v_{IN}}{nV_t}\Bigr)} .
$$

### Step 3 — Checks

- $A=0$ (no boost): $i_{OUT}=bI_5(x-1)/(x+1)=bI_5\tanh[v_{IN}/(2nV_t)]$, the ordinary pair, which saturates at $bI_5$.
- $A=1$: the denominator is 2, so $i_{OUT}=(bI_5/2)(x-1)$, which grows exponentially with $v_{IN}$.
- $A>1$: the denominator vanishes at $x=(A+1)/(A-1)$, where the expression grows without bound (positive feedback through the boost); in practice the current is limited when the transistors leave weak inversion.

### Step 4 — Input for $i_{OUT}=5I_5$ with $A=2$, $b=1$

$$
\frac{x-1}{3-x}=5\quad\Rightarrow\quad x-1=15-5x\quad\Rightarrow\quad x=\frac83,
$$
$$
\frac{v_{IN}}{nV_t}=\ln\frac83=0.981 .
$$

For comparison, the unbounded point for $A=2$ is $x=3$, i.e. $v_{IN}/(nV_t)=\ln3=1.10$, so $5I_5$ is reached just below it; without boost the output could never exceed $I_5$.
