# Detailed solution - R472

**Approach.** Write Kirchhoff's current law (KCL) at the two folding nodes X and Y and at the output, so that the current into $C_L$ is expressed in terms of the two input-transistor currents. Then find the largest current the circuit can actually deliver when $I_{SS} > I_P$, using the facts that the tail source still demands $I_{SS}$ and that neither folding node can supply more than $I_P$ to its input transistor.

### Step 1 — Reading the circuit and naming the currents

- $M_1$, $M_2$: NMOS input pair. The sources meet at the tail node P, which is pulled down by the current source $I_{SS}$. The drain of $M_1$ is node X, the drain of $M_2$ is node Y. The gate of $M_1$ is the input; the gate of $M_2$ is tied to $V_{out}$ (unity-gain feedback).
- $M_9$, $M_{10}$: PMOS current sources, each pushing $I_P$ from $V_{DD}$ into X and into Y.
- $M_3$, $M_4$: PMOS cascode ("folding") devices with fixed gate bias. $M_3$ carries current from X down to the input of the NMOS mirror (call that node N). $M_4$ carries current from Y down to the output.
- $M_5$–$M_8$: NMOS cascode current mirror (1:1). Its input is node N, its output is $V_{out}$.
- $C_L$: the load capacitor at $V_{out}$.

Define the branch currents, all positive in the direction drawn:

- $i_1$: current down through $M_1$ (X → P); $i_2$: current down through $M_2$ (Y → P);
- $i_3$: current down through $M_3$ (X → N); $i_4$: current down through $M_4$ (Y → $V_{out}$);
- $i_6$: current that the mirror output ($M_6$, $M_8$) sinks from $V_{out}$;
- $i_C$: current flowing into $C_L$, so that $dV_{out}/dt = i_C/C_L$.

### Step 2 — KCL bookkeeping

**KCL at X.** $M_9$ supplies $I_P$, which leaves through $M_1$ and $M_3$:
$$I_P = i_1 + i_3 \quad\Longrightarrow\quad i_3 = I_P - i_1 .$$

**KCL at Y.** Likewise:
$$I_P = i_2 + i_4 \quad\Longrightarrow\quad i_4 = I_P - i_2 .$$

**Mirror.** The 1:1 mirror copies its input current: $i_6 = i_3$.

**KCL at the output.** The gate of $M_2$ draws no current, so
$$
\begin{aligned}
i_C &= i_4 - i_6\\
&= (I_P - i_2) - (I_P - i_1)\\
&= i_1 - i_2 .
\end{aligned}
$$

**Tail.** As long as the tail source stays saturated it sinks its full current:
$$i_1 + i_2 = I_{SS}.$$

**Physical limits.** Each cascode passes current only downward: node N is connected only to $M_3$ and to NMOS devices that can only sink current, so $i_3 \ge 0$; and with $V_{out}$ inside its normal swing $M_4$ cannot be turned on in reverse, so $i_4 \ge 0$. Therefore
$$i_1 \le I_P, \qquad i_2 \le I_P .$$
In words: an input transistor can never draw more than the $I_P$ that its PMOS current source provides.

### Step 3 — Quiescent point: why $I_{SS} < 2I_P$ is required

At rest ($V_{in} = V_{out}$), the pair splits the tail current equally: $i_1 = i_2 = I_{SS}/2$. The folding devices then carry
$$i_3 = i_4 = I_P - \frac{I_{SS}}{2}.$$
For the cascodes and the mirror to be on, this must be positive:
$$I_P - \frac{I_{SS}}{2} > 0 \quad\Longleftrightarrow\quad I_{SS} < 2I_P .$$
So the case asked about is $I_P < I_{SS} < 2I_P$. With $I_{SS} \ge 2I_P$ the amplifier cannot even be biased.

### Step 4 — Positive input step

A large positive step on the gate of $M_1$ makes $M_1$ try to steer the whole tail current, $I_{SS}$, through itself. But $i_1 \le I_P < I_{SS}$:

1. $M_1$ draws all of $M_9$'s current, so $i_3 = 0$: **$M_3$ turns off**, and with it the mirror ($i_6 = 0$).
2. Nothing else feeds X, so $V_X$ falls until $M_1$ leaves saturation and enters the **triode region**, where it conducts exactly $i_1 = I_P$ with a small $V_{DS1}$. X collapses to just above $V_P$.
3. The tail source still demands $I_{SS}$. The missing current, $I_{SS} - I_P$, must come from $M_2$, whose gate sits at $V_{out}$. The tail node P therefore settles where $M_2$ conducts $I_{SS} - I_P$:
$$i_2 = I_{SS} - I_P .$$

**Check that the tail source stays saturated.** Before the step, both gates were at the same voltage $V_0$ and each device carried $I_{SS}/2$, so $V_{P0} = V_0 - V_{TH} - V_{ov}(I_{SS}/2)$, where $V_{ov}(I) = \sqrt{2I/(\mu_nC_{ox}W/L)}$ is the overdrive needed to carry $I$. Now $M_2$, with its gate still at $V_{out} \approx V_0$, carries less current:
$$I_{SS} - I_P < \frac{I_{SS}}{2} \quad(\text{because } I_{SS} < 2I_P),$$
so it needs a smaller overdrive and $V_P = V_0 - V_{TH} - V_{ov}(I_{SS} - I_P) > V_{P0}$. The tail source gets *more* headroom than at rest and keeps sinking $I_{SS}$. As $V_{out}$ ramps up, $M_2$ acts as a source follower and P rises with it.

**Output current.** Substituting into Step 2:
$$
\begin{aligned}
i_4 &= I_P - i_2 = I_P - (I_{SS} - I_P) = 2I_P - I_{SS},\\
i_6 &= i_3 = 0,\\
i_C &= i_4 - i_6 = 2I_P - I_{SS}.
\end{aligned}
$$
The same value follows from $i_C = i_1 - i_2 = I_P - (I_{SS} - I_P)$. Hence
$$\frac{dV_{out}}{dt} = +\frac{2I_P - I_{SS}}{C_L}.$$

**Intuition.** The extra tail current that $M_1$ cannot absorb is "stolen" from the right-hand side: $M_2$ takes $I_{SS} - I_P$ out of Y, and that much less reaches $C_L$ through $M_4$.

### Step 5 — Negative input step

Now the gate of $M_1$ drops far below $V_{out}$, and $M_2$ (gate at $V_{out}$) tries to take the whole tail current. By symmetry:

1. $i_2$ is limited to $I_P$: **$M_4$ turns off** ($i_4 = 0$), $V_Y$ collapses toward $V_P$, and $M_2$ goes into the triode region carrying $i_2 = I_P$.
2. The tail still sinks $I_{SS}$, so $M_1$ carries the rest: $i_1 = I_{SS} - I_P$. Node P sits where $M_1$ conducts this current: $V_P = V_{in} - V_{TH} - V_{ov}(I_{SS} - I_P)$.
3. Therefore
$$
\begin{aligned}
i_3 &= I_P - i_1 = I_P - (I_{SS} - I_P) = 2I_P - I_{SS},\\
i_6 &= i_3 = 2I_P - I_{SS},\\
i_C &= i_4 - i_6 = 0 - (2I_P - I_{SS}) = -(2I_P - I_{SS}).
\end{aligned}
$$
$$\frac{dV_{out}}{dt} = -\frac{2I_P - I_{SS}}{C_L}.$$

The tail source stays saturated provided $V_P \ge V_{DS,sat}$ of the tail device, i.e. $V_{in} \ge V_{TH} + V_{ov}(I_{SS} - I_P) + V_{DS,sat}$. This is just the condition that the input stays within the input common-mode (CM) range.

### Step 6 — A compact check, and what happens outside the CM range

**Compact check.** From Step 2, $i_C = i_1 - i_2$ with $i_1 + i_2 = I_{SS}$ and $0 \le i_1, i_2 \le I_P$. The largest possible difference is obtained by pushing one current to its ceiling $I_P$, which forces the other to $I_{SS} - I_P$:
$$|i_C|_{max} = I_P - (I_{SS} - I_P) = 2I_P - I_{SS}.$$
So no other operating state can slew faster.

**Example.** With $I_P = 1$ mA, $I_{SS} = 1.5$ mA and $C_L = 1$ pF:
$$SR = \frac{2(1\ \mathrm{mA}) - 1.5\ \mathrm{mA}}{1\ \mathrm{pF}} = \frac{0.5\ \mathrm{mA}}{1\ \mathrm{pF}} = 0.5\ \mathrm{V/ns}.$$
For comparison, with $I_{SS} = I_P = 1$ mA the slew rate would be $I_{SS}/C_L = 1$ V/ns. Raising $I_{SS}$ beyond $I_P$ *lowers* the slew rate, which reaches zero at $I_{SS} = 2I_P$.

**Outside the input CM range.** If a negative step takes $V_{in}$ so low that $M_1$ cannot carry $I_{SS} - I_P$ with the tail device saturated, the tail source drops into the triode region and $M_1$ carries only some $i_w < I_{SS} - I_P$. The slewing current is then $i_3 = I_P - i_w$, which approaches $I_P$ as $M_1$ nearly cuts off. (A positive step that starts from an output level below the CM range behaves similarly until $V_{out}$ is high enough for $M_2$ to conduct $I_{SS} - I_P$.) This is a large-signal overload case, not the normal slew rate.

**Recovery.** During slewing, X (or Y) has collapsed to about $V_P$ and $M_1$ (or $M_2$) is in the triode region, while $M_3$ (or $M_4$) and possibly the mirror are off. At the end of the slew these nodes must be recharged by small currents before the loop regains control, so the circuit recovers slowly. This is a practical reason to choose $I_P > I_{SS}$.

### Result

For $I_P < I_{SS} < 2I_P$ (with $I_{SS} \ge 2I_P$ the circuit cannot be biased):
$$SR = \frac{2I_P - I_{SS}}{C_L}$$
in both directions, as long as the input stays within the input CM range.

- Positive step: $M_3$ off, $M_1$ in the triode region with $i_1 = I_P$, $M_2$ carries $I_{SS} - I_P$, and $M_4$ delivers $2I_P - I_{SS}$ into $C_L$.
- Negative step: $M_4$ off, $M_2$ in the triode region with $i_2 = I_P$, $M_1$ carries $I_{SS} - I_P$, and the mirror removes $2I_P - I_{SS}$ from $C_L$.
- (For comparison, if $I_P \ge I_{SS}$ the slew rate is $I_{SS}/C_L$.)

**Common mistake.** Reusing $SR = I_{SS}/C_L$ from the case $I_P > I_{SS}$. That result assumes the input transistor can absorb the whole tail current, but $M_1$ can draw no more than the $I_P$ that $M_9$ supplies. The annotated currents $I_P - I_{SS}$ in the figure would be negative here, and a cascode cannot carry negative current; the device simply turns off.

**Common mistake.** Claiming $SR = I_P/C_L$ because "the other input transistor turns off". In the unity-gain buffer the tail source still sinks $I_{SS}$ (its node P actually gains headroom), and since one input transistor is capped at $I_P$, the other one *must* conduct $I_{SS} - I_P$. That current is subtracted from the output current. $I_P/C_L$ only appears in the overload case where the input leaves its CM range and the tail source starves.

**Common mistake.** Writing $(I_{SS} - I_P)/C_L$. This mixes up which current reaches the load: $I_{SS} - I_P$ is the current the opposite input transistor *diverts*, not the current delivered to $C_L$.
