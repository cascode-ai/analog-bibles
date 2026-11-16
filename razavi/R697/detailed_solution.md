# Detailed solution - R697

**Approach.** Identify the circuit as a unity-gain sampler and derive its gain error by charge conservation at the op amp's inverting input, including the finite open-loop gain $A$ and the parasitic capacitance $C_{in}$ at that node. The error depends only on $A$ and $C_{in}/C_1$, so a fabrication error can cause a large gain error only if it lowers $A$ or raises $C_{in}$. We then test each of the three errors against this criterion.

### Step 1 — How the circuit works

Call the op amp's inverting input node X. Its non-inverting input is grounded.

- **Sampling phase ($S_1$, $S_2$ on, $S_3$ off).** $S_1$ connects the left plate of $C_1$ (node P) to $V_{in}$. $S_2$ connects the op-amp output to X, so the op amp is in unity-gain feedback and holds X at (virtual) ground. $C_1$ charges to $V_{in}$.
- **Amplification phase ($S_3$ on, $S_1$, $S_2$ off).** $S_3$ connects node P to the output. $C_1$ is now the only element between output and X, so it closes the feedback loop. Because no charge can leave X, $C_1$ keeps its voltage and the output becomes $V_{out} \approx V_{in}$.

So this is a **unity-gain sampler**, not an amplifier whose gain is a capacitor ratio: ideally $V_{out} = V_{in}$ regardless of the value of $C_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Charge at node X at the end of sampling

Model the op amp as $V_{out} = A(V_+ - V_-) = -AV_X$, where $A$ is the open-loop gain. Let $C_{in}$ be the total parasitic capacitance from X to ground (op-amp input capacitance plus the junction and overlap capacitances of $S_2$).

With $S_2$ closed, $V_{out} = V_X$. Combine with the op-amp equation:

$$V_X = -AV_X \;\Longrightarrow\; V_X(1 + A) = 0 \;\Longrightarrow\; V_X = 0 .$$

The total charge on the plates connected to X is the sum over the capacitors attached to X of (capacitance × (voltage of X − voltage of the other plate)):

$$Q_X = C_1(V_X - V_P) + C_{in}(V_X - 0) = C_1(0 - V_{in}) + 0 = -C_1V_{in}.$$

### Step 3 — Amplification phase and the gain error

When $S_2$ opens, node X becomes isolated (it connects only to capacitor plates and the op-amp gate), so $Q_X$ is **conserved**. Now $V_P = V_{out}$ and $V_X = -V_{out}/A$.

<!-- diagram: diagram-02.cir -->

**Charge conservation at X:**

$$C_1(V_X - V_{out}) + C_{in}V_X = -C_1V_{in}.$$

Substitute $V_X = -V_{out}/A$:

$$C_1\Big(-\frac{V_{out}}{A} - V_{out}\Big) + C_{in}\Big(-\frac{V_{out}}{A}\Big) = -C_1V_{in}.$$

Multiply by $-1$ and factor out $V_{out}$:

$$V_{out}\Big[C_1\Big(1 + \frac1A\Big) + \frac{C_{in}}{A}\Big] = C_1V_{in}.$$

Divide by $C_1$:

$$V_{out}\Big[1 + \frac1A\Big(1 + \frac{C_{in}}{C_1}\Big)\Big] = V_{in}.$$

$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + \dfrac1A\Big(1 + \dfrac{C_{in}}{C_1}\Big)} \approx 1 - \frac1A\Big(1 + \frac{C_{in}}{C_1}\Big).$$

**Gain error:**

$$\varepsilon \approx \frac{1}{A}\left(1 + \frac{C_{in}}{C_1}\right).$$

For example, $A = 1000$ and $C_{in}/C_1 = 0.1$ give $\varepsilon = 1.1/1000 = 0.11\ \%$. A **large** gain error therefore requires a **much lower op-amp gain $A$** (or a much larger $C_{in}$ relative to $C_1$). The node P does not appear: whatever capacitance hangs on P is charged by a voltage source in both phases.

### Step 4 — (c) Channeling during the source/drain implantation: the cause

**Channeling** occurs when implanted ions travel along open crystal directions of the silicon lattice and penetrate much deeper than the intended range.

- The source/drain junctions become **abnormally deep**, with a larger lateral spread under the gate. The effective channel length $L_{eff} = L_{drawn} - 2L_D$ shrinks ($L_D$ is the lateral diffusion).
- With deep junctions and a short channel, the drain's field controls more of the channel: **short-channel effects** (drain-induced barrier lowering, strong channel-length modulation, a tendency toward punch-through) become much stronger. Each device's output resistance $r_O$ falls.
- The op amp's open-loop gain is built from products of intrinsic gains: $A \propto g_mr_O$ per stage, or $\propto g_mr_O^2$ for cascode stages. With the bias current at its target, $g_m$ is roughly unchanged while $r_O$ drops sharply, so **$A$ drops sharply**.
- In addition, deeper junctions have larger sidewall area, so the junction capacitance that $S_2$ (and any other device) adds at X grows, which **raises $C_{in}$**.

Both effects increase $\varepsilon = (1 + C_{in}/C_1)/A$. **Verdict: yes, (c) can cause a large gain error.**

### Step 5 — (b) Very heavy doping of $C_1$'s bottom plate at node P: not a cause

The bottom plate of an integrated capacitor sits over (or in) the substrate and has a parasitic capacitance $C_P$ to it. Heavier doping of that plate (e.g. a diffusion bottom plate) increases this junction capacitance, but $C_P$ hangs on **node P**, which is **always driven**:

- during sampling by $V_{in}$ through $S_1$, so $C_P$ just charges to $V_{in}$;
- during amplification by $V_{out}$ through $S_3$, so $C_P$ just charges to $V_{out}$.

$C_P$ is not connected to X, so it does not enter the charge-conservation equation of Step 3: the charge delivered to X, and therefore $V_{out}$, are unchanged after settling. (This is precisely why the bottom plate is placed at P rather than at X.) Its only effects are an extra capacitive load on the op-amp output and on $S_1$, i.e. **slower settling**; only if a phase were too short to settle fully would it show up as an error.

Even a change in $C_1$ itself (heavy plate doping makes the capacitor slightly larger and more linear) does not matter: the sampler's ideal gain is 1 for any $C_1$, and a larger $C_1$ only *reduces* the $C_{in}/C_1$ term. **Verdict: not the cause.**

### Step 6 — (a) Heavy threshold-adjust implantation: not a cause

A heavier threshold-adjust implant shifts the thresholds. With the op-amp bias current at its target value:

- the square-law transconductance $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and the output resistance $r_O = 1/(\lambda I_D)$ contain no $V_{TH}$, so **$A$ is essentially unchanged**. The transistors simply operate at larger (or smaller) $V_{GS}$ with the same overdrive. (Heavier channel doping reduces mobility somewhat, and $g_m \propto \sqrt{\mu}$, but that is a small effect.)
- **Indirect effects only.** A larger $V_{GS}$ could eat into headroom and push some op-amp device out of saturation, or reduce the overdrive of the NMOS switches (larger on-resistance, slower settling). These depend on the specific bias levels and timing.
- **Charge injection** of $S_2$ changes with $V_{TH}$, but $S_2$ switches at the virtual ground X, so its injected charge is independent of $V_{in}$: it produces an **offset**, not a gain error. ($S_1$ opens after $S_2$, when X is already isolated, so its injection does not change $Q_X$.)

**Verdict: not the cause.**

### Result

- **(c) Channeling during the S/D implant — yes.** Deep junctions shorten $L_{eff}$ and strengthen short-channel effects, lowering $r_O$ and hence the op-amp gain $A$ (and adding junction capacitance at the summing node). The unity-gain sampler's error $\varepsilon \approx (1 + C_{in}/C_1)/A$ therefore grows substantially.
- **(b) Heavy doping of $C_1$'s bottom plate at P — no.** Node P is driven by $V_{in}$ and then by $V_{out}$, so its parasitic capacitance does not affect the charge at X; it only slows settling.
- **(a) Heavy threshold-adjust implant — no.** At a fixed bias current, $g_m$ and $r_O$ (and so $A$) do not depend on $V_{TH}$; it could matter only indirectly (headroom, switch resistance), and its charge-injection effect is an offset, not a gain error.

**Common mistake.** Treating the circuit as an inverting amplifier with gain set by a capacitor ratio, and then blaming (b) for "changing the ratio". The circuit is a unity-gain sampler: $C_1$ samples $V_{in}$ and is then placed in feedback, so ideally $V_{out} = V_{in}$ for any capacitor value.

**Common mistake.** Claiming that the bottom-plate parasitic at P causes charge sharing. Charge sharing happens only at a floating node; P is connected to a voltage source ($V_{in}$ or $V_{out}$) in both phases, which is exactly why the bottom plate is placed there.

**Common mistake.** Arguing that a higher threshold lowers the op amp's $g_m$. That holds only at a fixed $V_{GS}$; with the bias current held at its target, $g_m$ and $r_O$ are independent of $V_{TH}$.
