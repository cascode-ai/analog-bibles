# Detailed solution - G248

Treat each segment of the amplifier characteristic separately: in the linear segments the loop holds $S_o\approx S_i/f$ and $S_\epsilon$ is tiny; once the amplifier saturates, $S_o$ is fixed and the loop equation $S_\epsilon=S_i-fS_o$ alone sets the error. Then substitute $S_i=2\sin\omega t$ V.

### Step 1 — Clipping threshold

The output reaches 15 V when $S_\epsilon=0.54$ mV (from the open-loop characteristic: $0.14\ \mathrm{mV}+8\ \mathrm V/20{,}000$). The corresponding input is

$$
S_i=S_\epsilon+fS_o=0.54\ \mathrm{mV}+(0.1)(15\ \mathrm V)=1.50054\ \mathrm V .
$$

The input peak of 2 V exceeds this, so the output clips. On the sine, clipping begins and ends at

$$
\omega t=\arcsin\frac{1.50054}{2}=48.6^\circ,\qquad180^\circ-48.6^\circ=131.4^\circ,
$$

and symmetrically at 228.6° and 311.4° in the negative half cycle.

### Step 2 — Unclipped intervals ($|S_i|<1.50054$ V)

These are the same relations as for a smaller input. For $|S_i|\le0.70014$ V (up to $\omega t=20.5^\circ$), $S_\epsilon=S_i/5001$ and $S_o=9.998\,S_i$; for $0.70014\le|S_i|\le1.50054$ V, $S_\epsilon=(|S_i|-0.42\ \mathrm V)/2001$ with the sign of $S_i$ and $S_o=(S_i-S_\epsilon)/f$. Thus $S_o$ tracks $10S_i$ within 0.05%, and $|S_\epsilon|$ grows from 0 to 0.14 mV (kink at 20.5°) and on to 0.54 mV at the clipping point.

### Step 3 — Clipped intervals ($|S_i|>1.50054$ V)

With the amplifier saturated, $a_3=0$: the output is $\pm15$ V regardless of $S_\epsilon$, so the loop is effectively broken and, in the positive half cycle,

$$
S_\epsilon=S_i-fS_o=S_i-(0.1)(15\ \mathrm V)=S_i-1.5\ \mathrm V .
$$

At the input peak this gives $S_\epsilon=2-1.5=0.5$ V, roughly a thousand times the largest unsaturated error. The error is continuous at the clipping point, where $S_i-1.5\ \mathrm V=0.54$ mV.

### Step 4 — Waveforms

| $\omega t$ | 20.5° | 48.6° | 90° | 131.4° |
|---|---|---|---|---|
| $S_i$ (V) | 0.700 | 1.5005 | 2.0 | 1.5005 |
| $S_o$ (V) | 7.0 | 15 | 15 | 15 |
| $S_\epsilon$ | 0.14 mV | 0.54 mV | 0.5 V | 0.54 mV |

The output follows $10S_i$ and is clipped flat at ±15 V for 82.8° of every half cycle:

![Output voltage over one period: a sinusoid of 20 V amplitude clipped flat at ±15 V between 48.6° and 131.4°](/q/G248/solution-output.svg)

The error is nearly zero (below 0.54 mV) while the loop is active, and consists of positive and negative cap-shaped pulses of 0.5 V peak, the tops of the input sinusoid above ±1.5 V, during clipping:

![Error voltage over one period: near zero except for 0.5-V cap pulses centred on the input peaks](/q/G248/solution-error.svg)

A large error signal is thus the signature of an amplifier driven out of its linear range: feedback cannot correct an output that the basic amplifier can no longer change.
