(function() {var implementors = {};
implementors["bitvec"] = [{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::boxed::BitBox"]},{"text":"impl&lt;M, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"bitvec/ptr/struct.BitRef.html\" title=\"struct bitvec::ptr::BitRef\">BitRef</a>&lt;'_, M, T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::ptr::proxy::BitRef"]},{"text":"impl&lt;M, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"bitvec/ptr/struct.BitPtr.html\" title=\"struct bitvec::ptr::BitPtr\">BitPtr</a>&lt;M, T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"bitvec/ptr/trait.Mutability.html\" title=\"trait bitvec::ptr::Mutability\">Mutability</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::ptr::single::BitPtr"]},{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::slice::BitSlice"]},{"text":"impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,&nbsp;</span>","synthetic":false,"types":["bitvec::vec::BitVec"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Shared"]}];
implementors["itertools"] = [{"text":"impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"itertools/structs/struct.Format.html\" title=\"struct itertools::structs::Format\">Format</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["itertools::format::Format"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["wyz"] = [{"text":"impl&lt;M, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/comu/struct.Address.html\" title=\"struct wyz::comu::Address\">Address</a>&lt;M, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"wyz/comu/trait.Mutability.html\" title=\"trait wyz::comu::Mutability\">Mutability</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,&nbsp;</span>","synthetic":false,"types":["wyz::comu::Address"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtBinary"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtDisplay"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.LowerExp.html\" title=\"trait core::fmt::LowerExp\">LowerExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtLowerExp"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.LowerHex.html\" title=\"trait core::fmt::LowerHex\">LowerHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtLowerHex"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Octal.html\" title=\"trait core::fmt::Octal\">Octal</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtOctal"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtPointer"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.UpperExp.html\" title=\"trait core::fmt::UpperExp\">UpperExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtUpperExp"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;","synthetic":false,"types":["wyz::fmt::FmtUpperHex"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()