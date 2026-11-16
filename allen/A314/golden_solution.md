# Golden Solution - A314

## Reference answer

$R_{out} \approx 67\ \Omega$; $f_{-3\,dB} \approx 1/(2\pi R_{out}C_L) \approx 237$ MHz.

- Currents: M5 (1/1, mirrored from M10) carries 200 µA, so M1 = M2 = M3 = M4 = 100 µA; M8 and M6 (10/1) mirror M3 and M4 (1/1) ten times: 1 mA; M9 → M7 (10/1 : 10/1): 1 mA.
- Open-loop output resistance: $R_o = 1/(g_{ds6} + g_{ds7}) = 1/[(0.05 + 0.04)(1\ \mathrm{mA})] = 11.11$ kΩ.
- $g_{m2} = \sqrt{2(110\ \mu)(100)(100\ \mu)} = 1.483$ mS (was 0.469 mS with W = 10 µm); $g_{m4} = \sqrt{2(50\ \mu)(1)(100\ \mu)} = 100\ \mu$S; $g_{m6} = g_{m8} = \sqrt{2(50\ \mu)(10)(1\ \mathrm{m})} = 1$ mS.
- Loop gain (output → gate of M1 → M3/M8/M9/M7 path and M2/M4/M6 path): $|LG| = \tfrac12(g_{m2}/g_{m4})(g_{m6}+g_{m8})R_o = \tfrac12(14.83)(2\ \mathrm{mS})(11.11\ \mathrm{k}) = 164.8$.
- $R_{out} = R_o/(1 + |LG|) = 11.11\ \mathrm{k}/165.8 = 67.0\ \Omega$ (vs. 209 Ω with 10 µm devices).
- With no device capacitances given, $C_L$ is the only dynamic element, so the output node is the single pole: $f_{-3\,dB} = 1/(2\pi\cdot 67\ \Omega\cdot 10\ \mathrm{pF}) \approx 237$ MHz.
- Equally correct, more exact model: keeping the $g_{ds}$ of every device (diode nodes $g_{m4}+g_{ds4}+g_{ds2} = 109\ \mu$S, M8→M9→M7 transfer $g_{m7}/(g_{m9}+g_{ds9}+g_{ds8}) \approx 0.943$) lowers the loop gain to ≈ 147, giving $R_{out} \approx 75.1\ \Omega$ and $f_{-3\,dB} \approx 212$ MHz (confirmed by a small-signal nodal simulation).

## Grading notes

+2: either model, consistently applied: $R_{out}$ = 64–70 Ω with $f_{-3\,dB}$ = 225–250 MHz (output-stage $r_o$ only, $LG$ ≈ 165), or $R_{out}$ ≈ 72–78 Ω with $f_{-3\,dB}$ ≈ 205–220 MHz (all internal $g_{ds}$ kept, $LG$ ≈ 147); both come from the open-loop $R_o$ ≈ 11.1 kΩ reduced by $1 + LG$. Do not dock a remark that the bandwidth is a single-pole estimate because device parasitics are not given. +1: correct method with a slip in one transconductance (e.g., LG off by ≤ 20% for no stated modelling reason), or $R_{out}$ right and the bandwidth not computed. 0: right method but currents misread (e.g., 100 µA in M6/M7) giving a clearly different value. −2 (asserted as fact): $R_{out}$ taken as $R_o$ (no feedback), as $1/(g_{m6}+g_{m7})$ without the loop, or a bandwidth using the original W = 10 µm result (≈ 76 MHz) presented as the answer.
