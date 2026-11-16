# Detailed solution - R697

**Approach.** The circuit is a unity-gain sampler. Derive its gain error by charge conservation at the op amp's inverting input, including the finite open-loop gain $A$ and the parasitic capacitance $C_{in}$ at that node. The error depends only on $A$ and $C_{in}/C_1$, so a fabrication error causes a large gain error only if it lowers $A$ or raises $C_{in}$; test each of the three errors against this.

### Step 1 — Sampling phase: charge at node X

Call the op amp's inverting input X, model the op amp as $V_{out} = A(V_+ - V_-) = -AV_X$, and let $C_{in}$ be the total parasitic capacitance from X to ground (op-amp input capacitance plus the junction and overlap capacitances of $S_2$). In sampling, $S_1$ puts $V_{in}$ on the left plate of $C_1$ (node P) and $S_2$ places the op amp in unity-gain feedback, so $V_{out} = V_X$ and

$$V_X = -AV_X \;\Longrightarrow\; V_X(1 + A) = 0 \;\Longrightarrow\; V_X = 0 .$$

<!-- diagram: diagram-01.cir -->

The charge on the plates connected to X is then

$$Q_X = C_1(V_X - V_P) + C_{in}(V_X - 0) = C_1(0 - V_{in}) + 0 = -C_1V_{in}.$$

### Step 2 — Amplification phase and the gain error

$S_3$ now connects P to the output, so $C_1$ alone closes the feedback loop: the circuit is a **unity-gain sampler**, ideally $V_{out} = V_{in}$ for any value of $C_1$, not an amplifier with a capacitor-ratio gain. When $S_2$ opens, X is isolated, so $Q_X$ is **conserved**, with $V_P = V_{out}$ and $V_X = -V_{out}/A$.

<!-- diagram: diagram-02.cir -->

$$C_1(V_X - V_{out}) + C_{in}V_X = -C_1V_{in}.$$

Substituting $V_X = -V_{out}/A$, multiplying by $-1$ and dividing by $C_1$:

$$V_{out}\Big[C_1\Big(1 + \frac1A\Big) + \frac{C_{in}}{A}\Big] = C_1V_{in} \quad\Longrightarrow\quad V_{out}\Big[1 + \frac1A\Big(1 + \frac{C_{in}}{C_1}\Big)\Big] = V_{in},$$

$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + \dfrac1A\Big(1 + \dfrac{C_{in}}{C_1}\Big)} \approx 1 - \frac1A\Big(1 + \frac{C_{in}}{C_1}\Big).$$

**Gain error:**

$$\varepsilon \approx \frac{1}{A}\left(1 + \frac{C_{in}}{C_1}\right).$$

For example, $A = 1000$ and $C_{in}/C_1 = 0.1$ give $\varepsilon = 1.1/1000 = 0.11\ \%$. A **large** gain error therefore requires a **much lower op-amp gain $A$** (or a much larger $C_{in}$ relative to $C_1$). Node P does not appear: whatever capacitance hangs on P is charged by a voltage source in both phases.

### Step 3 — (c) Channeling during the source/drain implantation: the cause

In channeling, implanted ions travel along open crystal directions and penetrate much deeper than intended.

- The source/drain junctions become **abnormally deep**, with a larger lateral spread under the gate, so $L_{eff} = L_{drawn} - 2L_D$ shrinks ($L_D$: the lateral diffusion).
- **Short-channel effects** (drain-induced barrier lowering, strong channel-length modulation, a tendency toward punch-through) become much stronger, so every device's $r_O$ falls.
- The op-amp gain is built from intrinsic gains, $A \propto g_mr_O$ per stage or $\propto g_mr_O^2$ for cascode stages. At the target bias current $g_m$ is roughly unchanged while $r_O$ drops sharply, so **$A$ drops sharply**.
- Deeper junctions also have larger sidewall area, so the junction capacitance of $S_2$ (and any other device) at X grows, **raising $C_{in}$**.

Both effects increase $\varepsilon = (1 + C_{in}/C_1)/A$. **Verdict: yes, (c) can cause a large gain error.**

### Step 4 — (b) Very heavy doping of $C_1$'s bottom plate at node P: not a cause

Heavier doping of the bottom plate (e.g. a diffusion plate) increases its parasitic capacitance $C_P$ to the substrate, but $C_P$ hangs on **node P**, which is **always driven**: by $V_{in}$ through $S_1$ during sampling and by $V_{out}$ through $S_3$ during amplification. $C_P$ is not connected to X, so it does not enter the charge equation of Step 2, and $V_{out}$ is unchanged after settling. (This is why the bottom plate is placed at P rather than at X.) Its only effect is an extra capacitive load on the op-amp output and on $S_1$, i.e. **slower settling**; only if a phase were too short to settle fully would it show up as an error.

Even a change in $C_1$ itself (heavy plate doping makes the capacitor slightly larger and more linear) does not matter: the ideal gain is 1 for any $C_1$, and a larger $C_1$ only *reduces* the $C_{in}/C_1$ term. **Verdict: not the cause.**

### Step 5 — (a) Heavy threshold-adjust implantation: not a cause

With the op-amp bias current at its target value:

- $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$ contain no $V_{TH}$, so **$A$ is essentially unchanged**: the transistors operate at a different $V_{GS}$ with the same overdrive. (Heavier channel doping reduces mobility somewhat, and $g_m \propto \sqrt{\mu}$, but that is a small effect.)
- **Indirect effects only.** A larger $V_{GS}$ could eat into headroom and push some op-amp device out of saturation, or reduce the overdrive of the NMOS switches (larger on-resistance, slower settling); these depend on the specific bias levels and timing.
- **Charge injection** of $S_2$ changes with $V_{TH}$, but $S_2$ switches at the virtual ground X, so its injected charge is independent of $V_{in}$: an **offset**, not a gain error. (In the usual bottom-plate-sampling timing, $S_1$ opens slightly after $S_2$, when X is already isolated, so the injection of $S_1$ does not change $Q_X$.)

**Verdict: not the cause.**

### Result

- **(c) Channeling during the S/D implant — yes.** Deep junctions shorten $L_{eff}$ and strengthen short-channel effects, lowering $r_O$ and hence the op-amp gain $A$ (and adding junction capacitance at the summing node). The unity-gain sampler's error $\varepsilon \approx (1 + C_{in}/C_1)/A$ therefore grows substantially.
- **(b) Heavy doping of $C_1$'s bottom plate at P — no.** Node P is driven by $V_{in}$ and then by $V_{out}$, so its parasitic capacitance does not affect the charge at X; it only slows settling.
- **(a) Heavy threshold-adjust implant — no.** At a fixed bias current, $g_m$ and $r_O$ (and so $A$) do not depend on $V_{TH}$; it could matter only indirectly (headroom, switch resistance), and its charge-injection effect is an offset, not a gain error.

**Common mistake.** Treating the circuit as an inverting amplifier with a capacitor-ratio gain and blaming (b) for "changing the ratio". $C_1$ samples $V_{in}$ and is then placed in feedback, so ideally $V_{out} = V_{in}$ for any capacitor value.

**Common mistake.** Claiming that the bottom-plate parasitic at P causes charge sharing. Charge sharing needs a floating node; P is driven by $V_{in}$ or $V_{out}$ in both phases.

**Common mistake.** Arguing that a higher threshold lowers the op amp's $g_m$. That holds only at a fixed $V_{GS}$; with the bias current on target, $g_m$ and $r_O$ are independent of $V_{TH}$.
