# Detailed solution - R707

**Approach.** A current mirror copies a current accurately only if the two transistors are identical *and* at the same temperature, because the threshold voltage and the mobility both depend on temperature. We compare where the "copying" happens in each scheme: [Fig. 1] distributes a gate **voltage** generated at one location to transistors at other locations (and other temperatures); [Fig. 2] distributes **currents** and performs each mirroring locally. We quantify the temperature error of [Fig. 1] with the square law, then show why it cancels in [Fig. 2], and finally consider the wire resistances.

### Step 1 — How each scheme works

**[Fig. 1] — voltage distribution.** $M_0$ supplies $I_{REF}$ to the diode-connected $M_{REF}$, which develops a gate–source voltage $V_{GS}$. One long gate line carries this voltage to $M_1, M_2, \dots, M_n$ in distant circuits, whose sources return to the reference's ground through a long ground line with wire resistance. Each $M_k$ is expected to reproduce $I_{REF}$ (times its size ratio) from the shared $V_{GS}$.

**[Fig. 2] — current distribution.** Two matched PMOS sources $M_{0a}$, $M_{0b}$, placed side by side, generate $I_{REF1}$ and $I_{REF2}$. Each current travels through a wire to its destination, where it enters a local diode-connected device $M_{REF1}$ or $M_{REF2}$ placed right next to the device it biases ($M_1$ or $M_2$), with the two sources tied together locally. The mirroring is done locally.

### Step 2 — Temperature dependence of a MOSFET at fixed $V_{GS}$

In saturation (square law),

$$I_D = \tfrac12\mu(T)\,C_{ox}\frac{W}{L}\big(V_{GS} - V_{TH}(T)\big)^2 .$$

Two parameters depend on temperature $T$:

- **Mobility** falls with temperature because of lattice (phonon) scattering, roughly $\mu \propto T^{-3/2}$, so
$$\frac{1}{\mu}\frac{d\mu}{dT} = -\frac{3}{2T} = -\frac{1.5}{300\ \mathrm{K}} = -0.5\ \%/\mathrm{K}\quad\text{at } 300\ \mathrm{K}.$$
- **Threshold voltage** falls with temperature: $dV_{TH}/dT = -\kappa$ with $\kappa \approx 1$–$2$ mV/K.

Take the logarithmic derivative of $I_D$ at **fixed** $V_{GS}$:

$$\frac{1}{I_D}\frac{dI_D}{dT} = \frac{1}{\mu}\frac{d\mu}{dT} + \frac{2}{V_{GS} - V_{TH}}\left(-\frac{dV_{TH}}{dT}\right) = -\frac{3}{2T} + \frac{2\kappa}{V_{ov}},$$

where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage. The two effects have opposite signs: a hotter device has lower mobility (less current) but also a lower threshold, hence a larger overdrive (more current). At typical overdrives the threshold term wins.

### Step 3 — The error in [Fig. 1]

$M_{REF}$ is at temperature $T_0$ and sets $V_{GS}$ so that its own current is $I_{REF}$. A remote device $M_k$ (same size, for simplicity) at $T_k = T_0 + \Delta T$ receives the **same** $V_{GS}$, but its threshold and mobility are those of temperature $T_k$. Its current relative to the reference is

$$\frac{I_k}{I_{REF}} = \frac{\mu(T_k)}{\mu(T_0)}\left[\frac{V_{GS} - V_{TH}(T_k)}{V_{GS} - V_{TH}(T_0)}\right]^2 .$$

Insert $V_{TH}(T_k) = V_{TH}(T_0) - \kappa\Delta T$ and $\mu(T_k)/\mu(T_0) \approx 1 - 1.5\,\Delta T/T_0$:

$$\frac{I_k}{I_{REF}} \approx \left(1 - \frac{1.5\,\Delta T}{T_0}\right)\left(1 + \frac{\kappa\,\Delta T}{V_{ov}}\right)^2 \approx 1 + \left(\frac{2\kappa}{V_{ov}} - \frac{1.5}{T_0}\right)\Delta T,$$

keeping only first-order terms in $\Delta T$. The relative error is therefore

$$\frac{\Delta I}{I} \approx \left(\frac{2\kappa}{V_{ov}} - \frac{1.5}{T_0}\right)\Delta T .$$

**Numbers** ($V_{ov} = 0.2$ V, $T_0 = 300$ K):

$$
\begin{aligned}
\kappa = 1\ \mathrm{mV/K}:&\quad \frac{2(1\ \mathrm{mV/K})}{0.2\ \mathrm{V}} - 0.5\ \%/\mathrm{K} = 1\ \%/\mathrm{K} - 0.5\ \%/\mathrm{K} = +0.5\ \%/\mathrm{K},\\
\kappa = 2\ \mathrm{mV/K}:&\quad 2\ \%/\mathrm{K} - 0.5\ \%/\mathrm{K} = +1.5\ \%/\mathrm{K}.
\end{aligned}
$$

So each kelvin of temperature difference between $M_{REF}$ and $M_k$ shifts $I_k$ by roughly 0.5–1.5 %. A modest 5-K gradient across a large die (common near power-hungry blocks) gives 2.5–7.5 % of **systematic** current error, and it changes with time as the chip's activity (and thus its heat map) changes. The temperature dependence does **not** cancel just because all devices share one $V_{GS}$: sharing $V_{GS}$ is precisely what transmits the reference's temperature-dependent $V_{GS}$ to devices at other temperatures.

**Wire resistance makes [Fig. 1] worse.** The bias currents of all blocks flow back through the shared ground line, so the source of each $M_k$ sits above the reference's ground by the accumulated IR drop. Its effective $V_{GS}$ is reduced, lowering the current by $g_m\times(\text{drop})$. Since the wire's resistance has its own temperature coefficient (about +0.3 to +0.4 %/K for aluminium), this error is also temperature dependent. (Noise and supply bounce on the long gate line are also shared by all blocks.)

### Step 4 — Why [Fig. 2] is insensitive to the gradient

**Generating the currents.** $M_{0a}$ and $M_{0b}$ are adjacent, so they are at the same temperature and carry equal currents $I_{REF1} = I_{REF2}$ (up to random mismatch). Whatever their common temperature dependence is, it affects all blocks equally; it is not a mismatch between blocks.

**Transporting the currents.** Each current flows from a current source (the drain of $M_{0a}$ or $M_{0b}$, a high impedance) through the wire into the diode at the destination. A resistor in series with a current source does not change the current. The wire drop only reduces the headroom of $M_{0a}$, $M_{0b}$, which is harmless as long as they stay saturated (a small difference in their drain voltages causes only a $\lambda\Delta V_{DS}$ error).

**Local mirroring.** At circuit $k$, $M_{REFk}$ and $M_k$ are side by side, at the same temperature $T_k$, with their sources joined locally. The diode develops whatever $V_{GS}$ is needed to carry $I_{REFk}$ **at temperature $T_k$**, and $M_k$, seeing the same $V_{GS}$ at the same $T_k$, has the same $\mu$ and $V_{TH}$:

$$\frac{I_k}{I_{REFk}} = \frac{\tfrac12\mu(T_k)C_{ox}(W/L)_k(V_{GS} - V_{TH}(T_k))^2}{\tfrac12\mu(T_k)C_{ox}(W/L)_{REFk}(V_{GS} - V_{TH}(T_k))^2} = \frac{(W/L)_k}{(W/L)_{REFk}} .$$

All temperature-dependent factors cancel, whatever the temperature of the block. The global gradient no longer matters; only the tiny gradient across the few micrometres of each local mirror remains.

**Local ground.** Because $M_{REFk}$ and $M_k$ share a local source connection, IR drops on a global ground line also cancel: both see the same local ground.

### Step 5 — Residual errors of [Fig. 2]

- Random mismatch between $M_{0a}$ and $M_{0b}$, and between each $M_{REFk}$ and $M_k$ (present in any mirror).
- Small local temperature differences within each mirror pair.
- Channel-length modulation of $M_{0a}$, $M_{0b}$ if their drain voltages differ (different wire drops and diode voltages).
- Long current-carrying lines can pick up noise and couple to other signals; local bypass capacitors at the diode nodes help.
- The extra cost: one reference branch ($M_{0x}$ plus $M_{REFk}$) and one long line per block.

### Result

**[Fig. 2] is much better in the presence of temperature gradients.**

- In [Fig. 1], one gate–source voltage, set by $M_{REF}$ at its own temperature, is applied to devices at other temperatures. Since $V_{TH}$ and $\mu$ vary with temperature, each remote current drifts by about $\Delta I/I \approx (2|dV_{TH}/dT|/V_{ov} - 1.5/T)\Delta T \approx 0.5$–$1.5\ \%/\mathrm{K}$ (for $V_{ov} \approx 0.2$ V). The ground-line IR drops add further, also temperature-dependent, errors.
- In [Fig. 2], the reference is transported as a current (insensitive to wire resistance), and each mirror's diode device sits next to the device it biases, at the same temperature and on the same local ground, so the copy ratio $(W/L)_k/(W/L)_{REFk}$ is preserved regardless of the global gradient.

**Common mistake.** Arguing that the temperature dependence cancels in [Fig. 1] because "all devices share the same $V_{GS}$". The same voltage applied to transistors with different thresholds and mobilities produces *different* currents; cancellation requires the diode and the copying device to be at the same temperature, which only [Fig. 2] provides.

**Common mistake.** Comparing the circuits only by the IR drop on the ground line. That error exists, but the problem's point is the temperature gradient, which affects [Fig. 1] even with ideal wires.

**Common mistake.** Getting the sign of the effect wrong. $V_{TH}$ *decreases* with temperature, so a hotter remote device at the same $V_{GS}$ has a *larger* overdrive; at moderate overdrives this outweighs the mobility reduction and its current rises.
