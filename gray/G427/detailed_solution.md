# Detailed solution - G427

Break the DM loop at the controlled source $g_{m1}v_{in}$ of the half circuit and include the frequency dependence of the output node. The return ratio is a single-pole function whose dc value is far above 1, so it crosses unity well above its pole, where $|\mathcal R|\approx g_{m1}f/(\omega C_{L\mathrm{eff}})$.

### Step 1 — Capacitance at the output node with the loop broken

With the controlled source replaced by a test current, the output node sees $C_L$ to ground plus the series combination of $C_2$ and $(C_1+C_{ia})$, because the input node has $C_1$ (to the zeroed source) and $C_{ia}$ to ground and no other path:

$$
C_{L\mathrm{eff}}=C_L+\frac{C_2(C_1+C_{ia})}{C_2+C_1+C_{ia}}
=6\ \mathrm{pF}+\frac{(4)(6.58)}{10.58}\ \mathrm{pF}=8.49\ \mathrm{pF}.
$$

### Step 2 — Return ratio versus frequency

The test current $i_t$ develops $v_o=-i_tR_{odh}/(1+j\omega R_{odh}C_{L\mathrm{eff}})$ at the output. The input node follows through the capacitive divider $f=C_2/(C_2+C_1+C_{ia})=4/10.58=0.378$, which is frequency-independent. Hence

$$
\mathcal R_{dm}(j\omega)=\frac{g_{m1}R_{odh}\,f}{1+j\omega R_{odh}C_{L\mathrm{eff}}},\qquad
\mathcal R_{dm0}=a_{dm0}f=484 .
$$

### Step 3 — Unity-gain frequency

The pole is at $1/(R_{odh}C_{L\mathrm{eff}})=1/[(42.7\ \mathrm{k\Omega})(8.49\ \mathrm{pF})]=2.8\times10^{6}$ rad/s. Since $\mathcal R_{dm0}=484\gg1$, unity is reached far above the pole, where $1+j\omega R_{odh}C_{L\mathrm{eff}}\approx j\omega R_{odh}C_{L\mathrm{eff}}$:

$$
|\mathcal R_{dm}(j\omega)|\approx\frac{g_{m1}f}{\omega C_{L\mathrm{eff}}}=1
\;\Rightarrow\;
\omega_r=\frac{g_{m1}f}{C_{L\mathrm{eff}}}=\frac{(30\ \mathrm{mA/V})(0.378)}{8.49\ \mathrm{pF}}=1.34\times10^{9}\ \mathrm{rad/s},
$$

i.e. $f_r=\omega_r/2\pi=213$ MHz.
