两个单位增益频率（unity-gain frequency）均约为 $4.0 \times 10^8$ rad/s（≈ 64 MHz）。

- 差模：$g_{m1} = 2(100\ \mu\text{A})/0.25\ \text{V} = 0.8$ mA/V；$a_{dm}(s) = -g_{m1}R/(1 + sRC_{Ld})$，其中 $R = r_{o1}\|r_{o3} = 200\|250 = 111$ kΩ（$a_{dm0} = -88.9$）。由于 $|a_{dm0}| \gg 1$，$|a_{dm}| = 1$ 出现在 $\omega \approx g_{m1}/C_{Ld} = 0.8\ \text{mA/V}/2\ \text{pF} = 4.0 \times 10^8$ rad/s 处。
- CMC：$g_{m5} = 2(200\ \mu\text{A})/0.25 = 1.6$ mA/V，$g_{m5h} = 0.8$ mA/V；$a_{cmc}(s) = -g_{m5h}R_c/(1 + sR_cC_{Lc})$，其中 $R_c = R_{o(\text{down})}\|r_{o3} \approx 248$ kΩ（$a_{cmc0} \approx -198$）。$|a_{cmc}| = 1$ 出现在 $\omega \approx g_{m5h}/C_{Lc} = 4.0 \times 10^8$ rad/s 处。
- 两者相等，是因为 $g_{m5h} = g_{m1}$（每半边电流相同，过驱动电压相同），并且两个负载电容相等。
