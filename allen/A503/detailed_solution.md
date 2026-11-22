# Detailed solution - A503

Replace the integrator resistor by a switched capacitor. A capacitor that is charged to the source on $\phi_1$ and then dumped, with its plates swapped to ground and virtual ground, into the integrating capacitor on $\phi_2$ delivers a packet of charge $C_1v_s$ each period with the sign that makes the integration noninverting. Switches 1 and 2 become the $\phi_1$ switches that pick which source the input capacitor samples. Charge conservation at the virtual ground then gives the difference equation.

### Step 1 — Circuit

- **Op amp and integrating capacitor.** The op amp has its noninverting input grounded; the integrating capacitor $C_I$ connects the inverting input (virtual ground) to the output, which is $v_{int}$. A reset switch across $C_I$ (or a precharge) sets $v_{int}=V_{th}$ before a conversion.
- **Input capacitor $C_1$.** Its left plate goes to a source bus on $\phi_1$ and to ground on $\phi_2$. Its right plate goes to ground on $\phi_1$ and to the op amp's inverting input on $\phi_2$. Because each plate of $C_1$ is always switched between a source and ground or virtual ground, parasitic capacitances on its plates are either driven by a voltage source or held at zero volts, and do not transfer charge to $C_I$: the integrator is parasitic-insensitive.
- **Switches 1 and 2.** They connect the source bus to $v_{in}^*$ and to $-V_{REF}$. They are merged with the $\phi_1$ left-plate switch: during the run-up the left plate goes to $v_{in}^*$ on $\phi_1$ (switch driven by $\phi_1\cdot\text{RUNUP}$); during the run-down it goes to $-V_{REF}$ on $\phi_1$ (switch driven by $\phi_1\cdot\overline{\text{RUNUP}}$). The control signal RUNUP is set at the start of a conversion and cleared by the counter carry after $N_{REF}$ periods.
- **Comparator.** It compares $v_{int}$ with $V_{th}$ at the end of each $\phi_2$, when $v_{int}$ has settled, and stops the counter when the run-down crosses $V_{th}$.

### Step 2 — Charge transfer in one clock period

Let $v_s$ be the source selected during $\phi_1$ of period $n-1$. At the end of $\phi_1$, $C_1$ holds its left plate at $v_s$ and its right plate at 0, so the charge on its right plate is

$$
q_{R}(\phi_1)=C_1(0-v_s)=-C_1v_s .
$$

On $\phi_2$ both plates are at 0 V (ground and virtual ground), so $q_R(\phi_2)=0$. The right plate and the left plate of $C_I$ form an isolated node at the virtual ground, so the charge $+C_1v_s$ gained by $C_1$ must be supplied by $C_I$, whose left-plate charge is $C_I(0-v_{int})$:

$$
-C_I\,\Delta v_{int}=-C_1v_s
\;\Longrightarrow\;
\Delta v_{int}=+\frac{C_1}{C_I}\,v_s .
$$

### Step 3 — Discrete-time relation

Sampling $v_{int}$ at the end of each $\phi_2$,

$$
v_{int}(n)=v_{int}(n-1)+\frac{C_1}{C_I}\,v_s(n-1),\qquad
H(z)=\frac{V_{int}(z)}{V_s(z)}=\frac{C_1}{C_I}\,\frac{z^{-1}}{1-z^{-1}},
$$

a noninverting, delayed integrator. During the run-up $v_{int}$ rises by $(C_1/C_I)v_{in}^*$ per period, and during the run-down it falls by $(C_1/C_I)V_{REF}$ per period.

### Step 4 — Consistency with the dual-slope operation

After $N_{REF}$ run-up periods $v_{int}=V_{th}+N_{REF}(C_1/C_I)v_{in}^*$, and returning to $V_{th}$ requires $N_{out}(C_1/C_I)V_{REF}=N_{REF}(C_1/C_I)v_{in}^*$:

$$
N_{out}=N_{REF}\,\frac{v_{in}^*}{V_{REF}},
$$

independent of the capacitor ratio, as in the continuous-time version with $K=C_1/(C_IT)$.

An equivalent alternative avoids a negative reference: use $+V_{REF}$ with an inverting branch, i.e. left plate to ground on $\phi_1$ and to $+V_{REF}$ on $\phi_2$, right plate to ground on $\phi_1$ and to the inverting input on $\phi_2$. That branch gives $v_{int}(n)=v_{int}(n-1)-(C_1/C_I)V_{REF}$, the same run-down slope.
