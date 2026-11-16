# Golden Solution - R446

## Reference answer

PMOS input devices (with an NMOS current-mirror load). This is the preferred design choice; an NMOS pair is not strictly impossible but is the weaker option.

- The amplifier output $V_E$ drives the gates of $M_3$/$M_4$, so in equilibrium it must sit at $V_{GS3} = V_{TH,N} + V_{OD3}$, roughly 1 V, close to ground.
- In a differential pair with an active mirror, the balanced (zero-offset) output voltage equals the voltage of the diode-connected mirror device. With a PMOS pair and an NMOS mirror, that voltage is an NMOS $V_{GS}$, the level $M_3$/$M_4$ need; if the mirror device is a scaled replica of $M_3$/$M_4$, the CMFB settles with the error amplifier balanced (no systematic offset), so $V_{out,CM} \approx V_{REF}$. The output range of this amplifier (≈ $V_{OD,N}$ up to $V_{REF} + |V_{TH,P}|$) comfortably contains ≈ 1 V.
- With an NMOS pair and a PMOS mirror the balanced output would sit near $V_{DD} - |V_{GS,P}|$ (≈ 1.7–2 V), well above the required ≈ 1 V. The amplifier then runs with a systematic input offset of order $\Delta V/A_v$ (tens of mV for a simple stage), and the output-side input device needs $V_E \ge V_{REF} - V_{TH,N}$ (≈ 0.8 V for $V_{REF}$ ≈ 1.5 V), leaving only a few hundred mV, or no, margin before it enters triode and the loop gain collapses. It can be made to work, but with a small, process-dependent margin.
- Input CM: the PMOS pair needs $V_{REF} \le V_{DD} - |V_{GS,P}| - V_{OD,tail}$ (≈ 1.7 V here); for the usual mid-supply $V_{REF}$ (≈ 1.5 V) this holds. A $V_{REF}$ well above ≈ 1.7 V would favour an NMOS pair on input-range grounds, but such a high output CM is not the normal choice for this folded cascode.
(Level-1 check, $V_{REF} = 1.5$ V, $\lambda = 0.1$ V⁻¹: the NMOS-input stage needs ≈ 13 mV of input error to put its output at 1.0 V, with the output-side input device 0.2 V from triode; the PMOS-input stage needs ≈ 2 mV.)

## Grading notes

+2: PMOS input pair (NMOS mirror load), justified by the DC level that $V_E$ must have (≈ $V_{GS}$ of the NMOS current sources), either through the match with the diode-connected NMOS mirror voltage (systematic offset) or through a correct output-headroom comparison (NMOS pair: $V_E \ge V_{REF} - V_{TH,N}$ leaves little or no margin; PMOS pair: wide output range around 1 V). Since $V_{REF}$ is not given, an answer may assume a mid-supply $V_{REF}$ if it says so; this is not an invented given. Describing the NMOS option as poor, marginal or giving a significant offset is fine; claiming as fact that it cannot work at all is a minor overstatement, not a reason to drop below +1.
+1: PMOS with a weaker but correct justification (e.g., only "output must be low" without the level or headroom argument).
0: PMOS without any reasoning; or a hedged answer that analyses both options including the $V_E$ output level but makes no clear choice.
-1: no clear choice (or a tentative lean toward NMOS) based only on the input common-mode range, without considering the level $V_E$ must have.
-2 (asserted as fact): NMOS input pair claimed to be the right choice, or the reasoning based on a misread loop (e.g., $V_E$ driving PMOS devices).
