# Detailed solution - G356

Represent the pair by its equivalent input generators ($\overline{v^2}$ in series with the base of $Q_1$, $\overline{i^2}$ from each base to ground), add the thermal noise of both source resistors, and refer everything to a single voltage in series with $v_s$. Each base current generator flows through its own 100-MΩ source resistance, which turns it into a large noise voltage.

### Step 1 — Generators of the super-β pair

Each transistor runs at $I_C=I_{EE}/2=0.5\ \mu$A, so $1/2g_m=26$ kΩ and $I_B=I_C/\beta=0.1$ nA. The two devices' voltage generators combine into one in series with the base of $Q_1$, and each base has its own current generator:

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(53\ \mathrm{k\Omega})=8.8\times10^{-16}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i^2}}{\Delta f}\approx2qI_B=3.2\times10^{-29}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Referring all sources to $v_s$

The output responds to the difference of the two base voltages, so any noise voltage appearing at either base is equivalent to the same voltage (with a sign that does not matter for uncorrelated noise) in series with $v_s$. Each base has $R_S$ in series, and the base input resistance is much larger than $R_S$, so each current generator flows entirely through $R_S$. The uncorrelated contributions are:

- the thermal noise of each source resistor, $4kTR_S$, twice;
- each base current generator flowing through its own $R_S$, giving $\overline{i^2}R_S^2$ at each base, twice;
- the voltage generator $\overline{v^2}$.

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot4kTR_S+2\,\frac{\overline{i^2}}{\Delta f}R_S^2+\frac{\overline{v^2}}{\Delta f}.
$$

### Step 3 — Numerical values

| Contribution | Expression | Value (V²/Hz) |
|---|---|---|
| Source resistors | $2(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \mathrm{M\Omega})$ | $3.32\times10^{-12}$ |
| Base current noise in $R_S$ | $2(3.2\times10^{-29}\ \mathrm{A^2/Hz})(100\ \mathrm{M\Omega})^2$ | $6.4\times10^{-13}$ |
| Stage voltage generator | $\overline{v^2}/\Delta f$ | $8.8\times10^{-16}$ |
| Total | | $3.96\times10^{-12}$ |

### Step 4 — Total noise in 1 kHz

The density is white, so

$$
\overline{v_{eq}^2}=(3.96\times10^{-12}\ \mathrm{V^2/Hz})(10^3\ \mathrm{Hz})=3.96\times10^{-9}\ \mathrm{V^2},\qquad
v_{eq,\mathrm{rms}}=62.9\ \mu\mathrm V .
$$

The source resistors' own thermal noise supplies about 84% of the total and the base-current noise flowing in them about 16%; the stage's voltage generator is negligible at this source impedance. The super-β pair thus adds only about 0.8 dB to the unavoidable source noise.
