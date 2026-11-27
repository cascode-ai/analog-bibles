# Detailed solution - R056

Approach: Translate each specification into a constraint on the device: the output-impedance requirement fixes the minimum channel length (through $r_O = 1/(\lambda I_D)$ with $\lambda \propto 1/L$), and the minimum drain–source voltage fixes the maximum overdrive (the device must stay saturated). Choosing both at their limits gives the smallest device, whose width follows from the square law. Then compute the capacitances of the folded layout.

### Step 1 — Channel length from the output-impedance requirement

The output impedance of the current source is $r_O = 1/(\lambda I_D)$, so $r_O \ge 20\ \mathrm{k}\Omega$ at $I_D = 0.5$ mA requires

$$\lambda \le \frac{1}{r_{O,min}\,I_D} = \frac{1}{(20\times10^{3}\ \Omega)(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{10\ \mathrm{V}} = 0.1\ \mathrm{V^{-1}} .$$

Since $\lambda \propto 1/L$, with $\lambda = 0.1\ \mathrm{V^{-1}}$ at $L = 0.5\ \mu$m:

$$\lambda = 0.1\ \mathrm{V^{-1}}\times\frac{0.5\ \mu\mathrm{m}}{L} \le 0.1\ \mathrm{V^{-1}} \quad\Longrightarrow\quad L \ge 0.5\ \mu\mathrm{m}.$$

Choice: $L = 0.5\ \mu$m. A longer $L$ would also meet the specification, but at a fixed overdrive $W$ must grow in proportion to $L$, so the gate area $WL$ (and the capacitance) would grow as $L^2$. With this choice $r_O = 1/[(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 20\ \mathrm{k}\Omega$, exactly the requirement.

### Step 2 — Overdrive from the minimum drain–source voltage

Saturation requires $V_{DS} \ge V_{GS} - V_{TH} = V_{ov}$, and $V_{DS}$ may fall to 0.4 V, so

$$V_{ov} \le 0.4\ \mathrm{V}.$$

Choice: $V_{ov} = 0.4$ V. A smaller overdrive would add headroom margin, but the width grows as $1/V_{ov}^2$; the largest allowed overdrive gives the narrowest device.

### Step 3 — Width from the square law

Neglecting the small $1 + \lambda V_{DS}$ factor, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ gives

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{1\times10^{-3}}{2.144\times10^{-5}} \approx 46.6418 ,$$

$$W \approx (46.6418)(0.5\ \mu\mathrm{m}) = 23.3209\ \mu\mathrm{m}.$$

Using the channel-length modulation factor, $I_D=\tfrac12\mu_n C_{ox}(W/L)V_{ov}^2(1+\lambda V_{DS})$. If the specified current is evaluated at $V_{DS}=0.4\ \mathrm{V}$, the factor is 1.04 and $W\approx23.3209\ \mu\mathrm{m}/1.04=22.4\ \mu\mathrm{m}$ to one decimal place. The capacitance calculation below uses the width from the first-order sizing.

Check. $g_m = 2I_D/V_{ov} = 2(0.5\ \mathrm{mA})/(0.4\ \mathrm{V}) = 2.5$ mS, so the intrinsic gain $g_mr_O = (2.5\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 50$, a reasonable value.

Design summary: $W/L = 23.3\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$.

### Step 4 — Gate–source and gate–drain capacitances (saturation)

With the overlap capacitance $C_{ov} = 0.4\ \mathrm{fF/\mu m}$ per unit width on each side:

$$WLC_{ox}\approx(23.3209\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2})=44.7761\ \mathrm{fF},$$

$$WC_{ov}\approx(23.3209\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m})=9.3284\ \mathrm{fF}.$$

In saturation the channel is pinched off at the drain end, so the channel capacitance appears between gate and source with the factor $\tfrac23$, and the drain sees only the overlap:

$$C_{GS}=\tfrac23 WLC_{ox}+WC_{ov}\approx\tfrac23(44.7761\ \mathrm{fF})+9.3284\ \mathrm{fF}=39.1791\ \mathrm{fF}\approx39.2\ \mathrm{fF},$$

$$C_{GD}=WC_{ov}\approx9.3\ \mathrm{fF}.$$

### Step 5 — Drain–substrate capacitance of the folded device

Since $1\ \mathrm{F/m} = 10^{9}\ \mathrm{fF/\mu m}$, the sidewall capacitance per unit perimeter is $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$. The two gate fingers of width $W/2$ share one central drain region, $W/2$ long and $E$ wide:

$$\frac{W}{2} = \frac{23.3209}{2}\ \mu\mathrm{m} = 11.66045\ \mu\mathrm{m}.$$

Bottom part, then sidewall part (all four sides):

$$A_D=\frac W2 E\approx(11.66045\ \mu\mathrm{m})(3\ \mu\mathrm{m})=34.98135\ \mu\mathrm{m^2},\qquad A_D C_j\approx19.5896\ \mathrm{fF},$$

$$P_D=2\left(\frac W2+E\right)\approx29.3209\ \mu\mathrm{m},\qquad P_D C_{jsw}\approx0.1026\ \mathrm{fF}.$$

Total (zero-bias):

$$C_{DB}=A_D C_j+P_D C_{jsw}\approx19.5896\ \mathrm{fF}+0.1026\ \mathrm{fF}=19.6922\ \mathrm{fF}\approx19.7\ \mathrm{fF}.$$

An unfolded drain of $W\times E$ would give about 39.4 fF: folding halves the drain capacitance, which matters for a current source whose drain is a signal node.

### Result

- Channel length: $L = 0.5\ \mu$m (from $r_O = 1/(\lambda I_D) \ge 20\ \mathrm{k}\Omega$, i.e. $\lambda \le 0.1\ \mathrm{V^{-1}}$).
- Overdrive: $V_{GS} - V_{TH} = 0.4$ V (saturation down to $V_{DS} = 0.4$ V).
- Width: $W/L = 46.6$, $W \approx 23.3\ \mu$m (22.4 µm if the factor $1 + \lambda V_{DS}$ is included).
- $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} \approx 39.2$ fF, $C_{GD} = WC_{ov} \approx 9.3$ fF, $C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} \approx 19.7$ fF.

These are the minimum-size choices. A longer $L$ or a smaller overdrive would also satisfy the specifications with margin, at the cost of a larger and more capacitive device.

**Common mistake:** Setting the overdrive to $V_{DS} - V_{TH}$ (i.e. requiring $V_{DS} \ge V_{GS}$). The saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ limits the *overdrive* directly: $V_{GS} - V_{TH} \le 0.4$ V.

**Common mistake:** Writing $r_O = \lambda/I_D$, or forgetting that $\lambda$ scales as $1/L$. With $r_O = 1/(\lambda I_D)$ and $\lambda \propto 1/L$, the output impedance fixes $L$, not $W$.

**Common mistake:** Using the full width for the drain area of the folded device ($W\times E$, about 39 fF). The drain is the single central region of length $W/2$; the two outer regions are sources.
