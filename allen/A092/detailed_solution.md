# Detailed solution - A092

Find which parasitic resistances in the layout can change the mirror ratio: only resistance in each transistor's source path, which subtracts from its gate–source voltage, matters. Count the squares of n⁺ diffusion between each channel and the common GRD contacts, then compute the resulting difference in gate drive and output current.

### Step 1 — Which resistances matter

- The gate draws no dc current, so the polysilicon and gate-contact resistances drop no voltage.
- Both transistors are saturated with $V_{DS1}=V_{DS2}$ (as stated), so drain-side resistances do not change the currents.
- The four GRD contacts (4 Ω each, 1 Ω in parallel) carry $I_{in}+I_{out}$ for both devices, shifting both sources equally; they cancel.

What remains is the n⁺ resistance from each channel's source edge to the contact column. A source resistance $R_{Si}$ reduces the effective drive, $V_{GS,i}^{\text{eff}}=V_G-I_iR_{Si}$, so a mismatch $R_{S1}\ne R_{S2}$ unbalances the mirror.

### Step 2 — Source-path resistances

The source diffusion is 10 µm wide along both paths; with the sheet resistance $R_\square=35\ \Omega/\mathrm{sq}$ and a corner square counted as 0.5:

| Path | Segments (10 µm wide) | Squares | Resistance |
|---|---|---|---|
| M1 (left) to contacts | 5 µm down (0.5), corner (0.5), 10 µm along the bottom strip (1), about 2 µm to the contact column (0.2) | ≈ 2.2 | $2.2\times35\ \Omega=77\ \Omega$ |
| M2 (right) to contacts | about 7 µm straight down | ≈ 0.7 | $0.7\times35\ \Omega=24.5\ \Omega$ |

M1's source current travels farther, so $\Delta R=R_{S1}-R_{S2}\approx52\ \Omega$, and M1's source sits about $(100\ \mu\mathrm A)(52\ \Omega)=5.2$ mV higher.

### Step 3 — Output current

With $\beta=K'W/L=(110\ \mu\mathrm{A/V^2})(10/2)=550\ \mu\mathrm{A/V^2}$, M1 at 100 µA needs $V_{ON}=\sqrt{2I/\beta}=0.603$ V across its channel. Measured from the common contact node, its gate is therefore at

$$
V_G-V_T=V_{ON}+I_{in}R_{S1}=0.603\ \mathrm V+(100\ \mu\mathrm A)(77\ \Omega)=0.6107\ \mathrm V .
$$

M2 sees the same gate voltage but a smaller source drop:

$$
I_{out}=\frac{\beta}{2}\big(0.6107\ \mathrm V-I_{out}R_{S2}\big)^2=(275\ \mu\mathrm{A/V^2})\big(0.6107\ \mathrm V-I_{out}(24.5\ \Omega)\big)^2 ,
$$

whose solution is

$$
I_{out}=101.7\ \mu\mathrm A .
$$

To first order, $\Delta I/I\approx g_m\Delta R=(2I/V_{ON})\Delta R=(332\ \mu\mathrm S)(52.5\ \Omega)=1.7\%$, the same result.

### Step 4 — Interpretation

The output is about 1.7% high, $I_{out}\approx101.7\ \mu$A, because the input device's source current must flow through more n⁺ diffusion to reach the ground contacts. The error disappears if both sources reach the ground metal through equal diffusion paths, for example with contacts placed symmetrically next to each source.
