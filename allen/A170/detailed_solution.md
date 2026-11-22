# Detailed solution - A170

The gain of the cascode is $g_{m1}$ times the output resistance, which the load M3 dominates. The added source lets M1 run at a larger current than M2 and M3, so $g_{m1}$ grows while $r_{ds3}$ does not change. Write the gain with the separate currents, compare it with the original stage at $I_{D2}$, and then check the output-resistance assumption.

### Step 1 — Gain with the added current source

KCL at the M1–M2 node gives $I_{D1}=I_{D2}+I_{D4}$, so M2 and M3 carry $I_{D2}=I_{D1}-I_{D4}$. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$, and with $R_{out}\approx r_{ds3}$ as before,

$$
A_v\approx-\frac{g_{m1}}{g_{ds3}}=-\frac{\sqrt{2K'_1(W_1/L_1)I_{D1}}}{\lambda_3(I_{D1}-I_{D4})}.
$$

The numerator follows M1's current, the denominator only M3's.

### Step 2 — Gain increase and the required current

The original amplifier has all currents equal to $I_{D2}$, i.e. $A_{v0}=-\sqrt{2K'_1(W_1/L_1)I_{D2}}/(\lambda_3I_{D2})$. With $I_{D2}$ held fixed, the ratio is

$$
\frac{A_v}{A_{v0}}=\sqrt{\frac{I_{D1}}{I_{D2}}}=\sqrt{1+\frac{I_{D4}}{I_{D2}}} .
$$

A factor of 10 requires $I_{D1}/I_{D2}=100$; with $I_{D2}=10\ \mu$A,

$$
I_{D1}=1\ \mathrm{mA},\qquad I_{D4}=I_{D1}-I_{D2}=99I_{D2}=990\ \mu\mathrm A .
$$

Because $g_m\propto\sqrt{I_D}$, a tenfold gain costs a hundredfold current in M1.

### Step 3 — Effect on the output resistance

The output resistance is the load in parallel with the cascode branch:

$$
R_{out}=r_{ds3}\parallel\left(r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}\right).
$$

$g_{m2}$, $r_{ds2}$ and $r_{ds3}=1/(\lambda_3I_{D2})$ are unchanged, but $r_{ds1}=1/(\lambda_1I_{D1})$ falls by 100, so the cascode branch falls by about 100. As long as it remains much larger than $r_{ds3}$, $R_{out}\approx r_{ds3}$ is unchanged and the gain rises by the full factor; otherwise $R_{out}$, and with it the gain improvement, drop somewhat. The output resistance of the added source itself appears in parallel with $r_{ds1}$ and lowers the branch further. With $I_{D2}$ held at 10 µA the output resistance cannot increase.

For example, with all $W/L=1$ and $\lambda_1=0.04\ \mathrm{V^{-1}}$, $\lambda_3=0.05\ \mathrm{V^{-1}}$: $g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=46.9\ \mu$S, $r_{ds2}=2.5$ MΩ, $r_{ds3}=2$ MΩ, and $r_{ds1}$ falls from 2.5 MΩ to 25 kΩ. The cascode branch falls from about 298 MΩ to $0.025+2.5+(46.9\ \mu\mathrm S)(25\ \mathrm{k\Omega})(2.5\ \mathrm{M\Omega})=0.025+2.5+2.93\approx5.5$ MΩ, no longer much larger than $r_{ds3}$, so $R_{out}$ drops from 1.99 MΩ to about 1.46 MΩ and the gain rises by only about $10\times1.46/1.99\approx7.4$.

If the comparison is instead made at the same $I_{D1}$ (the original amplifier at 100 µA, with $I_{D2}$ then reduced to 10 µA by a 90-µA source), the ratio from Step 1 is $I_{D1}/I_{D2}=10$, giving $I_{D4}=90\ \mu$A; in that reading the gain rises because $R_{out}\approx r_{ds3}=1/(\lambda_3I_{D2})$ rises tenfold.
