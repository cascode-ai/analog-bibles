(a)
```
Circuit (a)
M1 2 1 0 0 NCH W=1U L=1U
M2 2 3 4 4 PCH W=1U L=1U
M3 3 3 4 4 PCH W=1U L=1U
R1 3 0 50K
VIN 1 0 DC 1
VDD 4 0 DC 5
.MODEL NCH NMOS VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.OP
.END
```
(b) 文件相同，只是改为 `M2 2 3 4 4 PCH W=1U L=1U M=2`：两个 1 µm/1 µm 的单位器件并联，1:2 比例匹配的器件对就是这样实现的。

预期工作点（用同样的 level-1 方程手工分析）：
- M3 为二极管连接：$(5 - V_{SG3})/50\ \mathrm{k\Omega} = 25\ \mu\mathrm{A/V^2}(V_{SG3} - 0.7)^2(1 + 0.05V_{SG3})$ → $V_{SG3}$ ≈ 2.14 V，V(3) ≈ 2.86 V，参考电流 ≈ 57 µA。
- M2 饱和时复制这一电流（(a) 中 ×1，(b) 中 ×2）。当 $v_{IN}$ = 1 V 时，M1 只能吸收 ≈ 5 µA（$55\ \mu\mathrm{A/V^2}\times(0.3)^2(1 + 0.04v_{OUT})$），因此 M2 处于非饱和区，(a) 中 V(2) ≈ 4.92 V，(b) 中 ≈ 4.96 V。
- 作为参考，要使 $v_{OUT}$ = 2.5 V，(a) 中需要 $v_{IN}$ ≈ 1.68 V，(b) 中需要 ≈ 2.09 V。
