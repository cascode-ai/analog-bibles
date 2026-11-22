# Detailed solution - G247

Express both $S_o$ and $S_\epsilon$ as functions of the instantaneous input in each linear segment, using $S_\epsilon=S_i-fS_o$ together with the amplifier's own characteristic. The waveforms then follow by substituting $S_i=1.5\sin\omega t$ V.

### Step 1 — Is the output clipped?

With $f=0.1$, the clipping level $S_o=15$ V corresponds to $S_\epsilon=0.54$ mV, so it is reached at

$$
S_i=S_\epsilon+fS_o=0.54\ \mathrm{mV}+(0.1)(15\ \mathrm V)=1.50054\ \mathrm V .
$$

The input peak, 1.5 V, is just below this level, so the output never saturates; both waveforms stay within segments 1 and 2.

### Step 2 — Segment 1, $|S_o|<7$ V

Here $S_o=a_1S_\epsilon$, so $S_i=S_\epsilon(1+a_1f)=5001\,S_\epsilon$:

$$
S_\epsilon=\frac{S_i}{5001},\qquad S_o=\frac{50{,}000}{5001}S_i=9.998\,S_i .
$$

The segment ends at $S_o=7$ V, i.e. $S_\epsilon=0.14$ mV and $|S_i|=0.70014$ V, which on the sine occurs at $\omega t=\arcsin(0.70014/1.5)=27.8^\circ$ (and at 152.2°, 207.8°, 332.2°).

### Step 3 — Segment 2, $7<|S_o|<15$ V

The characteristic continues from $(0.14\ \mathrm{mV},7\ \mathrm V)$ with slope $a_2$:

$$
S_o=7\ \mathrm V+a_2(S_\epsilon-0.14\ \mathrm{mV})=4.2\ \mathrm V+20{,}000\,S_\epsilon .
$$

Substituting into $S_i=S_\epsilon+fS_o$ gives $S_i=2001\,S_\epsilon+0.42$ V, so for positive values

$$
S_\epsilon=\frac{S_i-0.42\ \mathrm V}{2001},\qquad S_o=\frac{S_i-S_\epsilon}{f}.
$$

At the input peak $S_i=1.5$ V:

$$
S_\epsilon=\frac{1.08\ \mathrm V}{2001}=0.540\ \mathrm{mV},\qquad S_o=4.2\ \mathrm V+(20{,}000)(0.5397\ \mathrm{mV})=14.995\ \mathrm V .
$$

### Step 4 — Output waveform

$S_o=(S_i-S_\epsilon)/f$ with $S_\epsilon$ below 0.6 mV, so the output equals $10S_i$ to within 0.05%: a practically perfect sinusoid of peak ±14.995 V, in phase with the input. The slope change at $|S_o|=7$ V (9.998 to 9.995) is invisible.

![Output voltage over one period: a sinusoid of peak 14.995 V just inside the ±15 V clipping level](/q/G247/solution-output.svg)

### Step 5 — Error waveform

$S_\epsilon$ is in phase with the input. It follows $S_i/5001$ (a sine of 0.30 mV amplitude) until it reaches ±0.14 mV at 27.8°, then rises 2.5 times more steeply versus $S_i$ ($1/2001$ instead of $1/5001$), reaching ±0.540 mV at the peaks:

| $\omega t$ | 0° | 27.8° | 60° | 90° |
|---|---|---|---|---|
| $S_i$ (V) | 0 | 0.700 | 1.299 | 1.5 |
| $S_\epsilon$ (mV) | 0 | 0.140 | 0.439 | 0.540 |
| $S_o$ (V) | 0 | 7.00 | 12.99 | 14.995 |

![Error voltage over one period: kinks at ±0.14 mV and peaked tops reaching ±0.540 mV](/q/G247/solution-error.svg)

The error waveform shows the amplifier's nonlinearity: the feedback loop supplies whatever extra input the basic amplifier needs where its gain drops, which keeps the output linear. The peaks are sharper than a sine because the error grows faster where the gain is lower.
