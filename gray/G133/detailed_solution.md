# Detailed solution - G133

The output devices $Q_1$ and $Q_2$ form a class B pair, so the usual class B power relations apply once the largest unclipped amplitude is known. That amplitude is the smaller of the two output limits: the positive swing is limited by the base drive of $Q_1$ through $R_1$, the negative swing by saturation of $Q_3$.

### Step 1 — Output limits and amplitude

With $Q_3$ saturated, $V_1=-15\ \mathrm V+0.2\ \mathrm V=-14.8$ V and the pnp follower $Q_2$ gives $V_o^-=V_1+V_{BE(\text{on})}=-14.1$ V for either load. With $Q_3$ off, $Q_1$'s base current $V_o/(\beta_FR_L)$ flows through $R_1$, and KVL from $V_{CC}$ gives

$$
V_o^+=\frac{V_{CC}-V_{BE(\text{on})}}{1+R_1/(\beta_FR_L)}=\frac{14.3\ \mathrm V}{1+\dfrac{20\ \mathrm{k\Omega}}{50R_L}},
$$

that is, 13.75 V for $R_L=10\ \mathrm{k\Omega}$ and 11.92 V for $R_L=2\ \mathrm{k\Omega}$. A symmetric sinusoid clips first on the positive side, so $\hat V_o=V_o^+$.

### Step 2 — Class B power relations

With crossover neglected, each output device conducts a half sine of peak $\hat V_o/R_L$ from its supply, whose average over the period is $\hat V_o/(\pi R_L)$. Thus

$$
P_L=\frac{\hat V_o^2}{2R_L},\qquad P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L},\qquad \eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}},
$$

and the two output devices share the difference equally:

$$
P_{\text{device}}=\frac{P_{\text{supply}}-P_L}{2}.
$$

The efficiency counts the output devices only, excluding the current of $R_1$ and $Q_3$.

### Step 3 — Numerical values

For $R_L=10\ \mathrm{k\Omega}$, $\hat V_o=13.75$ V:

$$
P_L=\frac{(13.75\ \mathrm V)^2}{2(10\ \mathrm{k\Omega})}=9.45\ \mathrm{mW},\qquad
P_{\text{supply}}=\frac{2(15\ \mathrm V)(13.75\ \mathrm V)}{\pi(10\ \mathrm{k\Omega})}=13.13\ \mathrm{mW},
$$
$$
\eta=\frac{9.45}{13.13}=72.0\%,\qquad P_{\text{device}}=\frac{13.13\ \mathrm{mW}-9.45\ \mathrm{mW}}{2}=1.84\ \mathrm{mW}.
$$

The 2 kΩ case follows in the same way:

| $R_L$ | $\hat V_o$ | $P_L$ | $P_{\text{supply}}$ | $\eta$ | Average dissipation per device |
|---|---|---|---|---|---|
| 10 kΩ | 13.75 V | 9.45 mW | 13.13 mW | 72.0% | 1.84 mW |
| 2 kΩ | 11.92 V | 35.5 mW | 56.9 mW | 62.4% | 10.7 mW |

The efficiency is below the ideal $\pi/4=78.5\%$ because the drive limit through $R_1$ keeps $\hat V_o$ well below $V_{CC}$, especially for the heavier 2 kΩ load. Taking $I_{b1}=I_{e1}/(\beta_F+1)$ in the limit changes the results only slightly (9.47 mW, 72.0%; 35.7 mW, 62.6%).
