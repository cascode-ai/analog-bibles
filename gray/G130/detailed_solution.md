# Detailed solution - G130

With crossover distortion neglected, $V_o=\hat V\sin\theta$ ($\theta=\omega t$) and $Q_1$ supplies the load during the positive half cycle only. Write $I_{c1}$, $V_{ce1}$ and their product as functions of $\theta$, locate the maxima of $P_{c1}$, and evaluate the three amplitudes. $V_{BE(\text{on})}$ does not enter, since it only matters for crossover; all three amplitudes are below the clipping limit $V_{CC}-V_{CE(\text{sat})}=14.8$ V.

### Step 1 — Waveform expressions

$Q_1$ is an emitter follower with its collector at $V_{CC}$ and emitter at $V_o$. It conducts when $V_o>0$ and carries the whole load current ($\beta_F$ large); for $V_o<0$, $Q_2$ conducts and $Q_1$ is off:

$$
I_{c1}=\begin{cases}\dfrac{\hat V}{R_L}\sin\theta,&0<\theta<\pi,\\[4pt]0,&\pi<\theta<2\pi,\end{cases}\qquad
V_{ce1}=V_{CC}-\hat V\sin\theta .
$$

The expression for $V_{ce1}$ holds over the whole cycle, because the emitter follows $V_o$ even when $Q_1$ is off; while $Q_2$ conducts, $V_{ce1}$ rises above $V_{CC}$, up to $V_{CC}+\hat V$. The dissipation is

$$
P_{c1}=I_{c1}V_{ce1}=\frac{\hat V}{R_L}\sin\theta\left(V_{CC}-\hat V\sin\theta\right)\quad(0<\theta<\pi),\qquad P_{c1}=0\quad(\pi<\theta<2\pi).
$$

### Step 2 — Where $P_{c1}$ peaks

With $u=\hat V\sin\theta$, $P_{c1}=u(V_{CC}-u)/R_L$, a parabola in $u$ with maximum $V_{CC}^2/(4R_L)$ at $u=V_{CC}/2$ (the midpoint of the load line).

- If $\hat V>V_{CC}/2=7.5$ V, $u$ passes through 7.5 V twice per half cycle, at $\sin\theta=7.5\ \mathrm V/\hat V$: $P_{c1}$ has **two humps** of height $V_{CC}^2/(4R_L)=(15\ \mathrm V)^2/(8\ \mathrm{k\Omega})=28.1$ mW, with a dip at $\theta=90^\circ$.
- If $\hat V\le V_{CC}/2$, $u$ never reaches 7.5 V: a **single hump** peaking at $\theta=90^\circ$ with value $(\hat V/R_L)(V_{CC}-\hat V)$.

### Step 3 — Key values for the three amplitudes

For $\hat V=11.5$ V: $I_{c1}$ peaks at $11.5\ \mathrm V/2\ \mathrm{k\Omega}=5.75$ mA; $V_{ce1}$ ranges from $15-11.5=3.5$ V to $15+11.5=26.5$ V; $P_{c1}$ peaks at 28.1 mW where $\sin\theta=7.5/11.5$, i.e. $\theta=40.7^\circ$ and $139.3^\circ$, and dips at $90^\circ$ to $(5.75\ \mathrm{mA})(3.5\ \mathrm V)=20.1$ mW. The other amplitudes follow in the same way:

| $\hat V$ | $I_{c1}$ peak | $V_{ce1}$ range | $P_{c1}$ shape and peak | Average $\bar P_{c1}$ |
|---|---|---|---|---|
| 11.5 V | 5.75 mA | 3.5–26.5 V | two humps, 28.1 mW at 41° and 139°; dip 20.1 mW at 90° | 10.9 mW |
| 6 V | 3 mA | 9–21 V | one hump, $3\ \mathrm{mA}\times9\ \mathrm V=27$ mW at 90° | 9.8 mW |
| 3 V | 1.5 mA | 12–18 V | one hump, $1.5\ \mathrm{mA}\times12\ \mathrm V=18$ mW at 90° | 6.0 mW |

The averages come from integrating $P_{c1}$ over the conducting half cycle and dividing by $2\pi$, using $\overline{\sin\theta}=1/\pi$ and $\overline{\sin^2\theta}=1/4$ over a full period:

$$
\bar P_{c1}=\frac{\hat VV_{CC}}{\pi R_L}-\frac{\hat V^2}{4R_L}.
$$

For example, at $\hat V=11.5$ V,

$$
\bar P_{c1}=\frac{(11.5)(15)}{\pi(2\ \mathrm{k\Omega})}\ \mathrm{V^2}-\frac{(11.5)^2}{4(2\ \mathrm{k\Omega})}\ \mathrm{V^2}=27.5\ \mathrm{mW}-16.5\ \mathrm{mW}=10.9\ \mathrm{mW}.
$$

### Step 4 — Waveforms

![Collector current of Q1: half sines of peak 5.75, 3 and 1.5 mA during 0 to 180 degrees, zero from 180 to 360 degrees](/q/G130/solution-current.svg)

![Collector-emitter voltage of Q1: sinusoids about 15 V in antiphase with the output, with minima 3.5, 9, 12 V at 90 degrees and maxima 26.5, 21, 18 V at 270 degrees](/q/G130/solution-vce.svg)

![Instantaneous dissipation of Q1: double hump of 28.1 mW with a 20.1 mW dip for 11.5 V, single humps of 27 and 18 mW for 6 and 3 V, zero in the second half cycle](/q/G130/solution-power.svg)

The current is a half sine during $0<\theta<180^\circ$ and zero afterwards; $V_{ce1}$ is a full sinusoid about 15 V in antiphase with the output; $P_{c1}$ is zero while $Q_1$ is off. The largest instantaneous dissipation is not at the largest output: at 11.5 V the device passes through the 28.1 mW maximum twice per cycle, while at its output peak it dissipates only 20.1 mW.
