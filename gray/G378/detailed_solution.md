# Detailed solution - G378

The total noise in a band is the integral of the spectral density. The white leakage shot noise integrates to a term proportional to $f_{BW}$, while the coupled channel noise, whose density rises as $f^2$, integrates to $f_{BW}^3/3$. Equate the two integrals and solve for $f_{BW}$.

### Step 1 — Device values

As for the spot-density comparison, $C_{ox}=\epsilon_{ox}/t_{ox}=4.31\ \mathrm{fF/\mu m^2}$ and

$$
C_{gs}=\frac23C_{ox}WL=\frac23(4.31\ \mathrm{fF/\mu m^2})(25\ \mu\mathrm m^2)=71.9\ \mathrm{fF},\qquad
2qI_G=1.6\times10^{-35}\ \mathrm{A^2/Hz}.
$$

### Step 2 — Integrated noise currents

$$
\overline{i_{g,\mathrm{shot}}^2}=\int_0^{f_{BW}}2qI_G\,df=2qI_Gf_{BW},
$$

$$
\overline{i_{g,\mathrm{ind}}^2}=\int_0^{f_{BW}}\frac{16}{15}kT(2\pi f)^2C_{gs}^2\,df=\frac{16}{15}kT(2\pi)^2C_{gs}^2\,\frac{f_{BW}^3}{3}.
$$

### Step 3 — Equal totals

Setting the two equal and cancelling one factor $f_{BW}$:

$$
f_{BW}^2=\frac{3\cdot2qI_G}{\frac{16}{15}kT(2\pi)^2C_{gs}^2}=3f_0^2,\qquad
f_0=\frac{1}{2\pi}\sqrt{\frac{2qI_G}{\frac{16}{15}kTC_{gs}^2}},
$$

where $f_0$ is the frequency at which the spot densities are equal:

$$
f_0=\frac{1}{2\pi}\sqrt{\frac{1.6\times10^{-35}\ \mathrm{A^2/Hz}}{(4.43\times10^{-21}\ \mathrm J)(5.17\times10^{-27}\ \mathrm{F^2})}}=\frac{8.36\times10^5\ \mathrm{rad/s}}{2\pi}=133\ \mathrm{kHz}.
$$

Therefore

$$
f_{BW}=\sqrt3\,f_0=\sqrt3\,(133\ \mathrm{kHz})=231\ \mathrm{kHz}.
$$

The totals become equal at a higher frequency than the spot densities, because below $f_0$ the shot noise dominates the integral and the coupled noise must exceed it over part of the band to catch up.
