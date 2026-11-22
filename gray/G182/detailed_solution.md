# Detailed solution - G182

For each transistor, find the voltages at its emitter and collector from the given dc conditions, using 0.7 V per forward-biased junction and the resistor drops. Then require $|V_{CE}|\ge|V_{CE(sat)}|=0.1$ V, which is the forward-active criterion the problem specifies. Many devices have one terminal tied to $V_{CC}$ (through a 0.2-V emitter-resistor drop) and the other at a fixed voltage above ground; each such device sets a lower bound on $V_{CC}$, and the largest bound is the answer. The common-mode input $V_{IC}$ must be swept over its full range, including values above 0.8 V.

### Step 1 — Fixed reference voltages

- Each pnp source with base at $\mathrm{Bias_1}$ has its emitter at $V_{CC}-0.2$ V: e.g. $Q_{11}$ drops $(6\ \mu\mathrm A)(33\ \mathrm{k\Omega})=0.198$ V and $Q_{18}$ drops $(21\ \mu\mathrm A)(9.3\ \mathrm{k\Omega})=0.195$ V.
- Nodes 9 and 10 are at 0.5 V, $\mathrm{Bias_{CM}}$ at 0.9 V, the base of $Q_5$ at 0.8 V and $\mathrm{Bias_3}$ at 0.7 V.
- Pbase is one $V_{EB}$ below $V_{CC}$: $V_{CC}-0.7$ V. Nbase is one $V_{BE}$ above ground: 0.7 V.

### Step 2 — The critical device: input tail source $Q_{11}$

The collector of $Q_{11}$ is the common emitter node of $Q_3$, $Q_4$ and $Q_5$. For low $V_{IC}$ it follows the pnp pair, one $V_{EB}$ above the input: $V_{IC}+0.7$ V. Once $V_{IC}$ exceeds 0.8 V, $Q_5$ (base at 0.8 V) takes the current and clamps the node at $0.8+0.7=1.5$ V. Its highest value is therefore 1.5 V, and $Q_{11}$ needs

$$
(V_{CC}-0.2\ \mathrm V)-1.5\ \mathrm V\ge0.1\ \mathrm V\;\Rightarrow\;V_{CC}\ge1.8\ \mathrm V .
$$

### Step 3 — The other devices

| Device | Emitter | Collector | Condition | $V_{CC}\ge$ |
|---|---|---|---|---|
| $Q_{18}$ | $V_{CC}-0.195$ V | node 26 $=V_{BE68}+V_{BE75}=1.4$ V | $V_{EC}\ge0.1$ V | 1.70 V |
| $Q_{63}$ | $(33\ \mu\mathrm A)(1.2\ \mathrm{k\Omega})=0.04$ V | base of $Q_{65}$ $=V_{CC}-1.4$ V | $V_{CE}\ge0.1$ V | 1.54 V |
| $Q_{16}$, $Q_{19}$ | $V_{CC}-0.2$ V | emitter of $Q_{21}$/$Q_{22}$ $=0.5+0.7=1.2$ V | $V_{EC}\ge0.1$ V | 1.5 V |
| $Q_{25}$ | $1.2-0.7=0.5$ V | node 25 $=V_{CC}-0.7$ V | $V_{CE}\ge0.1$ V | 1.3 V |
| $Q_{15}$ | $V_{CC}-0.2$ V | $\mathrm{Bias_{CM}}=0.9$ V | $V_{EC}\ge0.1$ V | 1.2 V |
| $Q_{12}$ | $V_{CC}-0.2$ V | base of $Q_5$ $=0.8$ V | $V_{EC}\ge0.1$ V | 1.1 V |
| $Q_{61}$ | $V_{CC}-0.2$ V | $0.7\ \mathrm V+(6\ \mu\mathrm A)(14\ \mathrm{k\Omega})=0.78$ V | $V_{EC}\ge0.1$ V | 1.08 V |
| $Q_{20}$ | $V_{CC}-0.2$ V | $\mathrm{Bias_3}=0.7$ V | $V_{EC}\ge0.1$ V | 1.0 V |
| $Q_{13}$, $Q_{14}$ | $V_{CC}-0.2$ V | nodes 9, 10 $=0.5$ V | $V_{EC}\ge0.1$ V | 0.8 V |

Node 25 is one $V_{BE}$ above the emitter of $Q_{64}$, which drives the base of $Q_{65}$; $Q_{65}$'s emitter is Pbase. Some devices are independent of $V_{CC}$: $Q_{17}$ runs from $V_{CC}-0.2$ V to node 25 at $V_{CC}-0.7$ V ($V_{EC}=0.5$ V), and the npn input pair has its collectors at $V_{CC}-0.2$ V.

### Step 4 — Minimum supply

The largest bound comes from $Q_{11}$:

$$
V_{CC(\min)}\approx1.8\ \mathrm V,
$$

with $Q_{18}$ (1.7 V), $Q_{63}$ (1.54 V) and $Q_{16}$/$Q_{19}$ (1.5 V) next. If the common-mode input were limited to $V_{IC}\le V_{IC,max}<0.8$ V, $Q_{11}$ would require only $V_{CC}\ge1.0\ \mathrm V+V_{IC,max}$, and $Q_{18}$ would set 1.7 V for $V_{IC,max}\lesssim0.7$ V; covering the full range, including $V_{IC}>0.8$ V, requires 1.8 V.

Two remarks on the criterion. $Q_9$/$Q_{10}$ (base 0.9 V, collector 0.5 V) and $Q_3$/$Q_4$ at $V_{IC}=0$ have slightly forward-biased collector junctions at every $V_{CC}$, so a strict $V_{BC}\le0$ test cannot be the intended one; with the given $V_{CE(sat)}$ criterion they are active. Also, $Q_6$ (emitter at about $(6\ \mu\mathrm A)(10\ \mathrm{k\Omega})=0.06$ V, collector at $V_{IC}-0.7$ V) is marginal just above $V_{IC}=0.8$ V, but this does not depend on $V_{CC}$.
