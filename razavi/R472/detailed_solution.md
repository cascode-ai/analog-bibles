# Detailed solution - R472

**Approach.** Write KCL at the folding nodes X and Y and at the output, so that the current into $C_L$ is expressed through the two input-transistor currents. Then find the largest current the circuit can deliver when $I_{SS} > I_P$, given that the tail source still sinks $I_{SS}$ and neither folding node can supply more than $I_P$ to its input transistor.

### Step 1 — Branch currents and KCL

Call the tail node P and the mirror input (drain of $M_3$) N. All currents are positive in the drawn direction: $i_1$ (X → P) and $i_2$ (Y → P) through the input pair, $i_3$ (X → N) and $i_4$ (Y → $V_{out}$) through the cascodes, $i_6$ sunk from $V_{out}$ by the mirror output ($M_6$, $M_8$), and $i_C$ into $C_L$, so that $dV_{out}/dt = i_C/C_L$.

KCL at X and at Y, and the 1:1 mirror, give

$$i_3 = I_P - i_1, \qquad i_4 = I_P - i_2, \qquad i_6 = i_3 .$$

KCL at the output (the gate of $M_2$ draws no current):

$$
\begin{aligned}
i_C &= i_4 - i_6\\
&= (I_P - i_2) - (I_P - i_1)\\
&= i_1 - i_2 .
\end{aligned}
$$

While the tail source stays saturated, $i_1 + i_2 = I_{SS}$. Neither cascode conducts in reverse ($i_3 \ge 0$, since node N feeds only NMOS devices, which can only sink current; $i_4 \ge 0$ with $V_{out}$ inside its normal swing), so an input transistor can never draw more than the $I_P$ of its PMOS current source:

$$i_1 \le I_P, \qquad i_2 \le I_P .$$

### Step 2 — Quiescent point: why $I_{SS} < 2I_P$ is required

At rest ($V_{in} = V_{out}$), $i_1 = i_2 = I_{SS}/2$, so the folding devices carry

$$i_3 = i_4 = I_P - \frac{I_{SS}}{2},$$

which must be positive for the cascodes and the mirror to be on:

$$I_P - \frac{I_{SS}}{2} > 0 \quad\Longleftrightarrow\quad I_{SS} < 2I_P .$$

So the case asked about is $I_P < I_{SS} < 2I_P$; with $I_{SS} \ge 2I_P$ the amplifier cannot even be biased.

### Step 3 — Positive input step

A large positive step makes $M_1$ try to steer the whole tail current $I_{SS}$ through itself, but $i_1 \le I_P < I_{SS}$:

1. $M_1$ draws all of $M_9$'s current, so $i_3 = 0$: **$M_3$ turns off**, and with it the mirror ($i_6 = 0$).
2. Nothing else feeds X, so $V_X$ falls until $M_1$ enters the **triode region**, where it conducts exactly $i_1 = I_P$ with a small $V_{DS1}$. X collapses to just above $V_P$.
3. The tail source still demands $I_{SS}$, so P settles where $M_2$ (gate at $V_{out}$) conducts the missing current:
$$i_2 = I_{SS} - I_P .$$

**The tail source stays saturated.** Before the step both gates were at $V_0$ with $I_{SS}/2$ each, so $V_{P0} = V_0 - V_{TH} - V_{ov}(I_{SS}/2)$, where $V_{ov}(I) = \sqrt{2I/(\mu_nC_{ox}W/L)}$ is the overdrive needed to carry $I$. Now $M_2$, with its gate still at $V_{out} \approx V_0$, carries less current,
$$I_{SS} - I_P < \frac{I_{SS}}{2} \quad(\text{because } I_{SS} < 2I_P),$$
so $V_P = V_0 - V_{TH} - V_{ov}(I_{SS} - I_P) > V_{P0}$: the tail source has *more* headroom than at rest and keeps sinking $I_{SS}$. As $V_{out}$ ramps up, P follows it through $M_2$.

**Output current.** From Step 1:
$$
\begin{aligned}
i_4 &= I_P - i_2 = I_P - (I_{SS} - I_P) = 2I_P - I_{SS},\\
i_6 &= i_3 = 0,\\
i_C &= i_4 - i_6 = 2I_P - I_{SS},
\end{aligned}
$$
the same as $i_C = i_1 - i_2 = I_P - (I_{SS} - I_P)$. Hence
$$\frac{dV_{out}}{dt} = +\frac{2I_P - I_{SS}}{C_L}.$$

The tail current that $M_1$ cannot absorb is taken out of Y by $M_2$, and that much less reaches $C_L$ through $M_4$.

### Step 4 — Negative input step

Now the gate of $M_1$ drops far below $V_{out}$, and $M_2$ (gate at $V_{out}$) tries to take the whole tail current. By symmetry:

1. $i_2$ is limited to $I_P$: **$M_4$ turns off** ($i_4 = 0$), $V_Y$ collapses toward $V_P$, and $M_2$ enters the triode region carrying $i_2 = I_P$.
2. $M_1$ carries the rest, $i_1 = I_{SS} - I_P$, which sets $V_P = V_{in} - V_{TH} - V_{ov}(I_{SS} - I_P)$.
3. Therefore
$$
\begin{aligned}
i_3 &= I_P - i_1 = I_P - (I_{SS} - I_P) = 2I_P - I_{SS},\\
i_6 &= i_3 = 2I_P - I_{SS},\\
i_C &= i_4 - i_6 = 0 - (2I_P - I_{SS}) = -(2I_P - I_{SS}),
\end{aligned}
$$
$$\frac{dV_{out}}{dt} = -\frac{2I_P - I_{SS}}{C_L}.$$

The tail source stays saturated provided $V_P \ge V_{DS,sat}$ of the tail device, i.e. $V_{in} \ge V_{TH} + V_{ov}(I_{SS} - I_P) + V_{DS,sat}$: the input stays within the input common-mode (CM) range.

### Step 5 — Upper bound, example, and the overload case

**Upper bound.** With $i_C = i_1 - i_2$, $i_1 + i_2 = I_{SS}$ and $0 \le i_1, i_2 \le I_P$, the largest difference puts one current at its ceiling $I_P$, which forces the other to $I_{SS} - I_P$:
$$|i_C|_{max} = I_P - (I_{SS} - I_P) = 2I_P - I_{SS},$$
so no other operating state can slew faster.

**Example.** With $I_P = 1$ mA, $I_{SS} = 1.5$ mA and $C_L = 1$ pF:
$$SR = \frac{2(1\ \mathrm{mA}) - 1.5\ \mathrm{mA}}{1\ \mathrm{pF}} = \frac{0.5\ \mathrm{mA}}{1\ \mathrm{pF}} = 0.5\ \mathrm{V/ns}.$$
With $I_{SS} = I_P = 1$ mA the slew rate would be $I_{SS}/C_L = 1$ V/ns: raising $I_{SS}$ beyond $I_P$ *lowers* the slew rate, which reaches zero at $I_{SS} = 2I_P$.

**Outside the input CM range.** If a negative step takes $V_{in}$ so low that $M_1$ cannot carry $I_{SS} - I_P$ with the tail device saturated, the tail source drops into the triode region and $M_1$ carries only some $i_w < I_{SS} - I_P$. The slewing current is then $i_3 = I_P - i_w$, which approaches $I_P$ as $M_1$ nearly cuts off. (A positive step that starts from an output level below the CM range behaves similarly until $V_{out}$ is high enough for $M_2$ to conduct $I_{SS} - I_P$.) This is a large-signal overload case, not the normal slew rate.

**Recovery.** During slewing, X (or Y) sits at about $V_P$ with $M_1$ (or $M_2$) in the triode region, while $M_3$ (or $M_4$) and possibly the mirror are off. These nodes must be recharged by small currents before the loop regains control, so recovery is slow: a practical reason to choose $I_P > I_{SS}$.

### Result

For $I_P < I_{SS} < 2I_P$ (with $I_{SS} \ge 2I_P$ the circuit cannot be biased):
$$SR = \frac{2I_P - I_{SS}}{C_L}$$
in both directions, as long as the input stays within the input CM range.

- Positive step: $M_3$ off, $M_1$ in the triode region with $i_1 = I_P$, $M_2$ carries $I_{SS} - I_P$, and $M_4$ delivers $2I_P - I_{SS}$ into $C_L$.
- Negative step: $M_4$ off, $M_2$ in the triode region with $i_2 = I_P$, $M_1$ carries $I_{SS} - I_P$, and the mirror removes $2I_P - I_{SS}$ from $C_L$.
- (For comparison, if $I_P \ge I_{SS}$ the slew rate is $I_{SS}/C_L$.)

**Common mistake.** Reusing $SR = I_{SS}/C_L$ from the case $I_P > I_{SS}$: $M_1$ can draw no more than the $I_P$ that $M_9$ supplies. The annotated currents $I_P - I_{SS}$ would be negative here, and a cascode cannot carry negative current; the device simply turns off.

**Common mistake.** Claiming $SR = I_P/C_L$ because "the other input transistor turns off": the tail source still sinks $I_{SS}$, so with one input transistor capped at $I_P$ the other *must* conduct $I_{SS} - I_P$, which is subtracted from the output current. $I_P/C_L$ appears only when the input leaves its CM range and the tail source starves.

**Common mistake.** Writing $(I_{SS} - I_P)/C_L$: $I_{SS} - I_P$ is the current the opposite input transistor *diverts*, not the current delivered to $C_L$.
