# Detailed solution - alsim-07-1-04

Complete the op amp with a simple input stage whose output can sit about 0.93 V above $V_{SS}$, where the crossover stage of [Fig. 1] needs $v_{in}'$. Connect the op amp as a unity-gain follower driving 100 Ω, and run transient simulations with 1-kHz sine waves of increasing amplitude. Compute the THD of each output waveform from its Fourier components. The THD curve then shows the two mechanisms expected from a nearly class-B output: crossover distortion at small amplitudes and clipping at large ones.

### Step 1 — Input stage

A p-channel source-coupled pair with an n-channel current-mirror load is used. Its output, the drain of the mirror's output device, rests near $V_{SS}+V_{GS}$ of the mirror, which can be matched to the 0.93 V that $v_{in}'$ requires. An n-channel pair with a p-channel load would rest near $V_{DD}$ and could not drive $v_{in}'$.

| Device | Type | $W/L$ (µm) | Role |
|---|---|---|---|
| MT | p | 48/14 | tail, mirrors M7: $(48/240)(100\ \mu\mathrm A)=20\ \mu$A |
| MA, MB | p | 100/5 | input pair; MA (+ input) on the diode side, MB (− input) drives $v_{in}'$ |
| MC, MD | n | 40/5 | mirror load, MC diode connected |

The mirror is sized so that at 10 µA

$$
V_{GS,MC}=0.7+\sqrt{\frac{2(10\ \mu\mathrm A)}{(47\ \mu\mathrm{A/V^2})(8)}}=0.93\ \mathrm V .
$$

So a balanced input stage puts $v_{in}'$ right at the crossover point. The sign is chosen for negative feedback in the follower: raising the + input lowers MA's current and raises MB's, which pushes $v_{in}'$ up. The crossover inverters and the common-source output devices each invert once, so $v_{out}$ rises too.

### Step 2 — Operating point

At rest the loop settles at $v_{in}'=V_{SS}+0.935$ V, inside the dead band found in alsim-07-1-03. Both crossover outputs leave M5 and M6 at the edge of conduction ($I_{D5}\approx0$, $I_{D6}=0.2\ \mu$A), so the output stage is effectively class B with essentially no quiescent current. The supply current is 301 µA, almost all of it in the bias and crossover branches. At this rest point $g_{m5}$ and $g_{m6}$ are nearly zero, so the small-signal loop gain is low: about 17 dB at 1 kHz. As soon as the output carries current, M5 or M6 turns on and the loop gain rises. This is why the distortion is concentrated near the zero crossings.

The input stage's 20 µA charges the Miller capacitors $C_1+C_2=13$ pF at about 1.5 V/µs. A 5-V-peak, 1-kHz sine needs only $2\pi(1\ \mathrm{kHz})(5\ \mathrm V)=0.03$ V/µs, so slewing plays no part.

### Step 3 — Simulation and THD extraction

```spice
* alsim-07-1-04 op amp as a unity-gain follower, 1-kHz sine
VDD vdd 0 DC 6
VSS vss 0 DC -6
IREF g7 0 DC 100U
M7 g7 g7 vdd vdd PCH W=240U L=14U
MT tl g7 vdd vdd PCH W=48U L=14U
MA dd inp tl vdd PCH W=100U L=5U
MB vin inn tl vdd PCH W=100U L=5U
MC dd dd vss vss NCH W=40U L=5U
MD vin dd vss vss NCH W=40U L=5U
M3 g5 g7 vdd vdd PCH W=144U L=14U
M4 g6 g7 vdd vdd PCH W=240U L=14U
M1 g5 vin vss vss NCH W=460U L=7.5U
M2 g6 vin vss vss NCH W=360U L=7.5U
C1 vin g5 8P
C2 vin g6 5P
M5 out g5 vss vss NCH W=1400U L=14U
M6 out g6 vdd vdd PCH W=2400U L=7.5U
RL out 0 100
VSH out inn DC 0
VIN inp 0 DC 0 SIN(0 1 1K)
.MODEL NCH NMOS LEVEL=1 KP=47U VTO=0.7 GAMMA=0.85 PHI=0.62 LAMBDA=0.05
.MODEL PCH PMOS LEVEL=1 KP=17U VTO=-0.9 GAMMA=0.25 PHI=0.62 LAMBDA=0.04
.OPTIONS RELTOL=1E-4 VNTOL=1E-7
.TRAN 0.5U 4M 0 0.5U
.FOUR 1K V(OUT)
.END
```

The amplitude of VIN is stepped from 10 mV to 6 V peak. Each run lasts four periods, and the last two periods, which are free of start-up transients, are resampled at 0.5 µs and Fourier-analysed. THD is the rms of harmonics 2–19 relative to the fundamental. `.FOUR` uses only harmonics 2–9 and therefore reads lower at small amplitudes (0.083% instead of 0.126% at 0.71 V rms), because crossover distortion has a long harmonic tail.

### Step 4 — Results

![Simulated THD versus rms output voltage at 1 kHz for the unity-gain follower driving 100 Ω, on log–log axes](/q/alsim-07-1-04/solution-thd.svg)

| $V_{out}$ (rms) | 7.1 mV | 35 mV | 0.14 V | 0.71 V | 2.12 V | 2.97 V | 3.39 V | 3.60 V | 3.66 V | 3.82 V |
|---|---|---|---|---|---|---|---|---|---|---|
| THD | 2.9% | 0.91% | 0.37% | 0.13% | 0.060% | 0.048% | 0.060% | 0.22% | 0.87% | 3.9% |

Three regions are visible.
- **Small amplitudes.** The THD falls steadily as the output grows, roughly as $V_{out}^{-0.7}$. Near each zero crossing the input stage must move $v_{in}'$ across the dead band before M5 or M6 takes over. The loop gain is small there, so the output lags the input by a roughly fixed error. As a fraction of the signal, that error shrinks as the amplitude increases.
- **Middle.** The THD is low and fairly flat, reaching a minimum of 0.048% at about 3 V rms.
- **Clipping.** Above about 3.5 V rms the THD rises steeply. The output peaks limit at +5.10 V and −5.05 V, where M6 and M5 are driven fully on and their triode resistance (about 15–20 Ω with 12 V of gate drive) drops about 1 V while delivering 50 mA into 100 Ω. The clipping level is therefore about 3.6 V rms (7.2 V peak to peak).
