# Detailed solution - R511

**Approach.** In the differential half circuit (both tail nodes are virtual grounds), follow the signal node by node: X, then P, then the output. The secondary path passes through the slow node X while the main path does not, and adding the "fast" and "slow" currents at P creates a zero. P and the output give two more poles, found from KCL and then separated using their large spread.

### Step 1 — Half circuit, node capacitances and small-signal model

Each node has a capacitance to ground: $C_X$ at X and at Y, $C_P$ at P and at Q, $C_L$ at each output. Apply $+V_{in}/2$ to the gates of $M_1$, $M_A$ and $-V_{in}/2$ to the gates of $M_2$, $M_B$; the two sides move oppositely, so $V_{out} = v_{left} - v_{right} = 2v_{left}$. The left output is fed from P, where $M_2$ (main path) and $M_7$ (secondary path, controlled by X) inject current.

Small-signal model of the left half:
- **node X:** $g_{mA}V_{in}/2$ pulled from X, in parallel with $r_{OA}$ and $C_X$ (ideal $I_1$ is open; the gate of $M_7$ draws no current);
- **node P:** $g_{m7}v_X$ pulled from P (equivalently $-g_{m7}v_X$ injected, since $M_7$'s source is at AC ground), $g_{m1}(-V_{in}/2)$ pulled by $M_2$, the conductance $G_P = 1/(r_{O2}\parallel r_{O7})$ and $C_P$;
- **P to output:** $M_5$ as a common-gate device, $g_{m5}v_P$ from P to the output in parallel with $r_{O5}$ (conductance $g_{O5} = 1/r_{O5}$);
- **output node:** the lower cascode, $R_{down} = (1 + g_{m3}r_{O3})r_{O9} + r_{O3}$ (conductance $G_D = 1/R_{down}$), and $C_L$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node X: the slow path

KCL at X:

$$v_X\left(\frac{1}{r_{OA}} + sC_X\right) + g_{mA}\frac{V_{in}}{2} = 0
\quad\Longrightarrow\quad
v_X = -\frac{g_{mA}\,V_{in}/2}{1/r_{OA} + sC_X} = -\frac{g_{mA}r_{OA}}{1 + sr_{OA}C_X}\cdot\frac{V_{in}}{2}.$$

Node X therefore contributes a pole at

$$\omega_X = \frac{1}{r_{OA}C_X},$$

a low frequency, because the resistance at X is a full $r_{OA}$. The current of $M_7$ into P is

$$i_7 = g_{m7}\,v_{sg7} = -g_{m7}v_X = \frac{g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\cdot\frac{V_{in}}{2}.$$

### Step 3 — Current injected into P: the zero

$M_2$ pulls $g_{m1}V_{in}/2$ *less* current out of P, i.e. injects $+g_{m1}V_{in}/2$, with no internal node (the "fast" path). The total injected current is

$$
\begin{aligned}
i_{inj}(s) &= \frac{V_{in}}{2}\left[g_{m1} + \frac{g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\right]
= \frac{V_{in}}{2}\cdot\frac{g_{m1}(1 + sr_{OA}C_X) + g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\\
&= \frac{V_{in}}{2}\cdot\frac{(g_{m1} + g_{m7}g_{mA}r_{OA}) + s\,g_{m1}r_{OA}C_X}{1 + sr_{OA}C_X}
= \frac{V_{in}}{2}\,G_{m0}\,\frac{1 + s/\omega_z}{1 + s/\omega_X},
\end{aligned}
$$

with the low-frequency transconductance $G_{m0} = g_{m1} + g_{m7}g_{mA}r_{OA}$ and

$$\omega_z = \frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}\,r_{OA}C_X} = \omega_X\left(1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right).$$

The zero is in the left half plane: above $\omega_X$ the secondary path dies out and the transconductance falls from $G_{m0}$ to $g_{m1}$, levelling off at $\omega_z = \omega_X\,G_{m0}/g_{m1}$.

### Step 4 — Node P and the output node (exact KCL)

Let $v_o$ be the left output voltage. KCL at the output and at P:

$$g_{m5}v_P + g_{O5}(v_P - v_o) = v_o\,(G_D + sC_L), \tag{1}$$

$$i_{inj} = v_P\,(G_P + sC_P) + g_{m5}v_P + g_{O5}(v_P - v_o). \tag{2}$$

From (1), $v_P = v_o\,\dfrac{G_D + g_{O5} + sC_L}{g_{m5} + g_{O5}}$. Substituting into (2):

$$i_{inj} = v_o\left[\frac{(G_D + g_{O5} + sC_L)(G_P + g_{m5} + g_{O5} + sC_P)}{g_{m5} + g_{O5}} - g_{O5}\right],$$

so that

$$\frac{v_o}{i_{inj}} = \frac{g_{m5} + g_{O5}}{D(s)},$$

$$D(s) = C_LC_P\,s^2 + \left[C_L(G_P + g_{m5} + g_{O5}) + C_P(G_D + g_{O5})\right]s + G_D(G_P + g_{m5} + g_{O5}) + g_{O5}G_P .$$

P and the output form a coupled second-order system. At $s = 0$, dividing by $(G_P + g_{m5} + g_{O5})$ and using $1/R_{up} = g_{O5}G_P/(G_P + g_{m5} + g_{O5})$, the inverse of $R_{up} = (1 + g_{m5}r_{O5})(r_{O2}\parallel r_{O7}) + r_{O5}$:

$$\frac{v_o}{i_{inj}}\Big|_{s=0} = \frac{g_{m5} + g_{O5}}{G_P + g_{m5} + g_{O5}}\cdot\frac{1}{G_D + 1/R_{up}} \approx R_{up}\parallel R_{down} = R_{out},$$

because $g_{m5} \gg G_P$: the familiar folded-cascode output resistance.

### Step 5 — Separating the two poles

The roots of $D(s)$ are far apart ($g_{m5}/C_P$ is fast, while $1/(R_{out}C_L)$ involves the very large $R_{out}$), so they are approximately $c/b$ and $b/a$ for $D = as^2 + bs + c$. Since $G_D, g_{O5} \ll g_{m5}$, the term $C_P(G_D + g_{O5})$ in $b$ is negligible, and

$$\omega_{out} \approx \frac{G_D(G_P + g_{m5} + g_{O5}) + g_{O5}G_P}{C_L(G_P + g_{m5} + g_{O5})} = \frac{G_D + 1/R_{up}}{C_L} = \frac{1}{R_{out}C_L},$$

$$\omega_P \approx \frac{C_L(G_P + g_{m5} + g_{O5})}{C_LC_P} = \frac{g_{m5} + g_{O5} + G_P}{C_P} \approx \frac{g_{m5}}{C_P}.$$

Therefore

$$\frac{v_o}{i_{inj}} \approx \frac{R_{out}}{(1 + s/\omega_P)(1 + s/\omega_{out})}.$$

### Step 6 — Overall transfer function

Combining $V_{out} = 2v_o$ with Steps 3 and 5:

$$\boxed{\frac{V_{out}}{V_{in}}(s) = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_P}\right)\left(1 + \dfrac{s}{\omega_{out}}\right)}}$$

with
- $\omega_X = \dfrac{1}{r_{OA}C_X}$ (nodes X and Y; one pole for the differential half circuit),
- $\omega_P \approx \dfrac{g_{m5}}{C_P}$ (nodes P and Q),
- $\omega_{out} = \dfrac{1}{R_{out}C_L}$, $R_{out} \approx [g_{m5}r_{O5}(r_{O2}\parallel r_{O7})]\parallel[g_{m3}r_{O3}r_{O9}]$,
- a left-half-plane zero $\omega_z = \dfrac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}r_{OA}C_X} = \omega_X\left(1 + \dfrac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right)$.

For finite $r_O$ and poles that are not well separated, $(1 + s/\omega_P)(1 + s/\omega_{out})$ is replaced by $D(s)/D(0)$ from Step 4; the X pole and the zero do not change. A single-ended output has half the gain with the same poles and zero.

### Step 7 — Can the zero cancel a pole?

**Not the X/Y pole.** The ratio

$$\frac{\omega_z}{\omega_X} = 1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}$$

is exactly the gain-boost factor: greater than 1 whenever the secondary path is active, and much greater if the boost is worthwhile (e.g. $\approx 30$). If the output pole is dominant ($\omega_{out} < \omega_X$), the magnitude falls at 40 dB/dec between $\omega_X$ and $\omega_z$ and the phase heads toward $-180^\circ$ there: the phase-margin degradation mentioned in the problem.

**The output pole: yes, by design.** Choose $C_X$ (for example by adding capacitance at X and Y) so that $\omega_z = \omega_{out}$:

$$\frac{g_{m1}r_{OA}C_X}{g_{m1} + g_{m7}g_{mA}r_{OA}} = R_{out}C_L
\quad\Longrightarrow\quad
C_X = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}C_L}{g_{m1}r_{OA}} .$$

Then

$$\frac{V_{out}}{V_{in}} = \frac{G_{m0}R_{out}}{(1 + s/\omega_X)(1 + s/\omega_P)} ,$$

X becomes the dominant pole, and if $\omega_P$ is well above it, the unity-gain bandwidth is

$$\omega_u \approx G_{m0}R_{out}\,\omega_X = \frac{G_{m0}R_{out}}{r_{OA}C_X} = \frac{G_{m0}R_{out}\,g_{m1}}{G_{m0}R_{out}C_L} = \frac{g_{m1}}{C_L},$$

the same as for the plain folded cascode, now with a DC gain larger by the boost factor.

**The folding-node pole: in principle.** Setting $\omega_z = g_{m5}/C_P$ requires $C_X = G_{m0}C_P/(g_{m1}g_{m5}r_{OA})$. More generally, the exact condition is that $\omega_z$ coincide with a root of $D(s)$.

**In practice** these cancellations match time constants of unrelated nodes ($r_{OA}C_X$ against $R_{out}C_L$ or $C_P/g_{m5}$), which track poorly over process, temperature and load. The cancellation is imperfect and leaves a closely spaced pole–zero **doublet**, i.e. a slow-settling component in the step response.

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})R_{out}\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_X\right)\left(1 + s/\omega_P\right)\left(1 + s/\omega_{out}\right)},$$

$$\omega_X = \frac{1}{r_{OA}C_X},\quad \omega_P \approx \frac{g_{m5}}{C_P},\quad \omega_{out} = \frac{1}{R_{out}C_L},\quad \omega_z = \frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}r_{OA}C_X} = \omega_X\left(1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right)\ \text{(LHP)}.$$

- The zero can **never** cancel the X/Y pole: it always lies above it by the boost factor $1 + g_{m7}g_{mA}r_{OA}/g_{m1}$.
- It **can** be placed on the output pole by choosing $C_X = G_{m0}R_{out}C_L/(g_{m1}r_{OA})$ (X then becomes dominant and $\omega_u \approx g_{m1}/C_L$), or in principle on the folding-node pole.
- Such cancellation is only approximate in practice and leaves a doublet (slow settling).

**Common mistake.** Putting the zero in the right half plane. The two paths add at P with the same sign, one of them low-pass filtered by node X, and such a "fast plus slow" combination always gives a left-half-plane zero.

**Common mistake.** Writing the X pole as $g_{mA}/C_X$, as if X were a diode-connected node. X is loaded only by $r_{OA}$ (ideal $I_1$), so $\omega_X = 1/(r_{OA}C_X)$, a low frequency.

**Common mistake.** Claiming the zero cancels the X pole "because they come from the same node". Their ratio is the boost factor, which must be large for the circuit to be useful.
