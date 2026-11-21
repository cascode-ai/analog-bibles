# Detailed solution - G342

Treat the locked loop as a linear system from input frequency to VCO control voltage. The first-order loop responds to each frequency step with a single exponential, so the output is the square-wave modulation scaled by $1/K_O$, with edges whose time constant is $1/K_v$. Compute the loop constants, the steady levels and the edge shape, then check that the loop stays locked.

### Step 1 — Loop constants

With the frequency in rad/s, the VCO gain is

$$
K_O=0.93\,\omega_{osc}=0.93\,(2\pi\times2000\ \mathrm{rad/s})\ \mathrm{V^{-1}}=1.169\times10^4\ \mathrm{rad/(V\cdot s)},
$$

and the loop gain constant is

$$
K_v=AK_DK_O=(1)(2.55\ \mathrm{V/rad})(1.169\times10^4\ \mathrm{rad/(V\cdot s)})=2.98\times10^4\ \mathrm{s^{-1}} .
$$

### Step 2 — Transfer function and step response

The phase detector gives $V_o=AK_D(\theta_i-\theta_o)$ with the sum-frequency term ignored, and the VCO phase is $\theta_o=(\omega_{osc}+K_OV_o)/s$ in deviation form. In terms of the input frequency deviation $\Delta\omega_i=\omega_i-\omega_{osc}$,

$$
V_o=AK_D\,\frac{\Delta\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\Delta\omega_i}=\frac{1}{K_O}\,\frac{K_v}{s+K_v} .
$$

A step of input frequency therefore produces an exponential step of $V_o$ toward $\Delta\omega_i/K_O$, with time constant

$$
\tau=\frac{1}{K_v}=\frac{1}{2.98\times10^4\ \mathrm{s^{-1}}}=33.6\ \mu\mathrm s .
$$

### Step 3 — Steady output levels

In steady state the VCO runs at the input frequency, so $K_OV_o=\omega_i-\omega_{osc}$. The input deviates by $\pm50$ Hz from the 2-kHz center:

$$
V_o=\frac{\pm2\pi(50\ \mathrm{Hz})}{1.169\times10^4\ \mathrm{rad/(V\cdot s)}}=\pm26.9\ \mathrm{mV}
\qquad\left(=\pm\frac{50}{0.93\times2000}\ \mathrm V\right).
$$

The output is $+26.9$ mV while the input is at 2.05 kHz and $-26.9$ mV while it is at 1.95 kHz, a swing of 53.8 mV peak to peak centered on 0 V.

### Step 4 — Output waveform

The modulation is a 200-Hz square wave, so each frequency is held for 2.5 ms in a 5-ms period. Since $2.5\ \mathrm{ms}\approx75\tau$, every transition settles completely, and each edge is

$$
V_o(t)=\pm26.9\ \mathrm{mV}\left(1-2e^{-t/\tau}\right),
$$

with $t$ measured from the switching instant. The 10–90% rise time is $2.2\tau=74\ \mu$s and the output is within 1% of its final value after $5\tau=0.17$ ms, so the demodulated waveform is a nearly ideal 200-Hz square wave.

![Demodulated output: a 200-Hz square wave between +26.9 mV and −26.9 mV with fast exponential edges](/q/G342/solution-waveform.svg)

On an expanded time scale each edge is a single exponential with no overshoot, as expected for a first-order loop:

![Expanded rising edge with time constant 33.6 µs, settled after 0.17 ms](/q/G342/solution-edge.svg)

### Step 5 — The loop stays locked

The steady phase error needed to hold the VCO at $\pm50$ Hz is

$$
\theta_e=\frac{V_o}{AK_D}=\frac{\Delta\omega_i}{K_v}=\frac{2\pi(50\ \mathrm{Hz})}{2.98\times10^4\ \mathrm{s^{-1}}}=0.011\ \mathrm{rad},
$$

far below the phase-detector limit. Equivalently, the lock range $\pm(\pi/2)K_v=\pm4.68\times10^4$ rad/s ($\approx\pm7.5$ kHz) is much larger than the $\pm50$ Hz deviation, so the linear model used above holds throughout.
