# Golden Solution - grsim-12-06

## Reference answer

(a) $a'_{cm} \approx -0.0050$.
- $g_{m1} = 1$ mA/V, $r_{o1} = 200$ kΩ, $r_{o3} = 400$ kΩ, $r_{o5h} = 200$ kΩ, $g_{m5h} = 1$ mA/V.
- Open-loop CM gain $a_{cm} \approx -(R_{o(\text{down})}\|r_{o3})/r_{o5h} = -396\ \text{k}/200\ \text{k} = -1.98$, with $R_{o(\text{down})} \approx r_{o1}g_{m1}r_{o5h} = 40$ MΩ.
- CMC gain $a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3}) \approx -396$.
- $a'_{cm} = a_{cm}/[1 + a_{cms}(-a_{cmc})] = -1.98/397 \approx -0.0050$ (−46 dB).

(b) Expected plot: $|a'_{cm}|$ is flat at about 0.005 (−46 dB) from 100 Hz up to the MHz range.
- At higher frequencies it rises at about +20 dB/decade. Capacitance at the tail node shunts $r_{o5}$ and raises the open-loop CM gain above a zero near $1/(r_{o5}C_{\text{tail}})$, which is around 10 MHz for tail-node capacitance of order 100 fF. At the same time the CMFB loop gain is still large but no longer growing.
- The output pole is common to $a_{cm}$ and $a_{cmc}$. In the closed CMFB loop it is pushed out to about $g_{m5h}/C_{\text{out}}$, beyond 100 MHz for output-node capacitance of order 100 fF, so it does not cause a roll-off within the plotted range.
- The exact corner depends on the junction and overlap capacitances in the models.

## Grading notes

(a) +2 level: −0.005 (±10%), using $a_{cm}$ ≈ −1.98 and $a_{cmc}$ ≈ −396. (b) A correct simulation shows a low-frequency plateau at ≈ 0.005 that agrees with (a) within about 20%, and a rise at high frequency (beginning somewhere in the 1–100 MHz decade, depending on parasitics) as the CMFB loses effectiveness. Credit split about equally between (a) and (b). A plateau near 2 (CMFB not closed) or a sign error that turns the CMFB into positive feedback (unstable or large gain) means the simulation is set up wrongly.
