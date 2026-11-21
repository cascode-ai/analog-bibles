# Detailed solution - G149

A finite CMRR means that a change $\Delta V_{IC}$ in the common-mode input of the op amp produces the same output as a differential input of $\Delta V_{IC}/\mathrm{CMRR}$; it therefore acts as an input offset that drifts with the common-mode voltage. The offset was nulled at $V_{IC}=0$, so the drift over the largest excursion from that point must stay below 1 mV.

### Step 1 — CMRR as a common-mode-dependent offset

The op-amp output is $v_o=A_{dm}v_{id}+A_{cm}v_{ic}=A_{dm}\left(v_{id}+v_{ic}A_{cm}/A_{dm}\right)$. The common-mode term is equivalent to an input offset

$$
\Delta V_{OS}=\frac{\Delta V_{IC}}{\mathrm{CMRR}},\qquad \mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|.
$$

Because this term is referred to the input, it adds directly to any input-referred offset of the instrumentation amplifier, independent of the closed-loop gain of 1000.

### Step 2 — Largest excursion and required CMRR

The offset is zero at $V_{IC}=0$, and the range $-10$ V to $+10$ V extends at most 10 V from that point in either direction. Requiring the offset to stay below 1 mV:

$$
\frac{10\ \mathrm V}{\mathrm{CMRR}}<1\ \mathrm{mV}\ \Rightarrow\ \mathrm{CMRR}>10^4\quad(80\ \mathrm{dB}).
$$

### Step 3 — Effect of the resistive network

Two refinements, each of about 0.1 %, do not change the result. The op amp's own common-mode input is the divided voltage $V_{IC}R_2/(R_1+R_2)=0.999V_{IC}$, and an offset at the op-amp input refers to the circuit input through the ratio of noise gain to signal gain, $(1+R_2/R_1)/(R_2/R_1)=1.001$. With perfectly matched resistors the network itself contributes no common-mode error, so the minimum op-amp CMRR is **$10^4$ (80 dB)**.
