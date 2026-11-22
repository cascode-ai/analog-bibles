# Detailed solution - G377

The leakage shot noise is white, while the capacitively coupled channel noise grows as $\omega^2$. Compute $C_{gs}$ from the oxide thickness and geometry, equate the two spectral densities and solve for the frequency.

### Step 1 — Gate capacitance

$$
C_{ox}=\frac{\epsilon_{ox}}{t_{ox}}=\frac{3.45\times10^{-11}\ \mathrm{F/m}}{80\times10^{-10}\ \mathrm m}=4.31\times10^{-3}\ \mathrm{F/m^2}=4.31\ \mathrm{fF/\mu m^2},
$$

and with $WL=(50\ \mu\mathrm m)(0.5\ \mu\mathrm m)=25\ \mu\mathrm m^2$,

$$
C_{gs}=\frac23C_{ox}WL=\frac23(4.31\ \mathrm{fF/\mu m^2})(25\ \mu\mathrm m^2)=71.9\ \mathrm{fF}.
$$

### Step 2 — The two spectral densities

$$
\frac{\overline{i_{g,\mathrm{shot}}^2}}{\Delta f}=2qI_G=2(1.6\times10^{-19}\ \mathrm C)(0.05\times10^{-15}\ \mathrm A)=1.6\times10^{-35}\ \mathrm{A^2/Hz},
$$

$$
\frac{\overline{i_{g,\mathrm{ind}}^2}}{\Delta f}=\frac{16}{15}kT\,\omega^2C_{gs}^2,\qquad
\frac{16}{15}kT=4.43\times10^{-21}\ \mathrm J,\quad C_{gs}^2=5.17\times10^{-27}\ \mathrm{F^2}.
$$

The first is constant; the second rises as $\omega^2$, so they cross at one frequency, below which the leakage shot noise dominates.

### Step 3 — Crossover frequency

Setting the densities equal:

$$
\omega^2=\frac{2qI_G}{\frac{16}{15}kT\,C_{gs}^2}=\frac{1.6\times10^{-35}\ \mathrm{A^2/Hz}}{(4.43\times10^{-21}\ \mathrm J)(5.17\times10^{-27}\ \mathrm{F^2})}=6.99\times10^{11}\ \mathrm{s^{-2}},
$$

$$
\omega=8.36\times10^5\ \mathrm{rad/s},\qquad f=\frac{\omega}{2\pi}=133\ \mathrm{kHz}.
$$

Above about 133 kHz the gate noise current of this device is dominated by channel noise coupled through $C_{gs}$, even though the leakage current is extremely small.
