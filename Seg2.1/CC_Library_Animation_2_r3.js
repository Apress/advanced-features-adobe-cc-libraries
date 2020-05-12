(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B3C26").s().p("AjLA0YAAAAACAAADABYADABAFABAGABYAHAAAHACAJAAYAIAAAKABAKAAYAUAAAXgBAZgEYAGgBAGgBAGgBYAGgBAGgBAGgBYANgDANgDALgDYAHgCAGgCAGgCIACAAYgGABAFgBgCAAIAAAAIABAAIAAAAIABAAIAFgBIAKgCYAGgCAGgCAGgBYAGgCAGgCAGgBYAKgDALgDAKgDYAKgEAKgCAJgDYAKgCAIgEAIgCYAIgCAHgDAGgCYAFgCAFgCADgBYAEgCABAAAAAAIAAAAYAAAAgBgBgDgCYgDgCgEgDgGgDYgGgCgHgEgIgDYgIgEgJgCgKgDYgLgCgLgDgMgCYgMgBgNgBgOAAYgHAAgGAAgHABYgGAAgGABgHAAIgJACIgFAAIgBAAIgBABIAAAAIgEAAIgCABYgGABgGACgGACYgNADgMAEgNAEIgEACIgEABIgCABYgDABgDABgDABYgGACgFADgGACYgXAKgUALgSAKYgIAFgIAGgHAFYgHAFgGAFgEADYgFAEgEAEgCACYgDADgBABAAAAIAAAA");
	this.shape.setTransform(242.9,85.5,1,1,0,0,0,0,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#65402D").s().p("AigggYAAAAADABAEACYAEACAGADAJACYAEABAFABAGABYAFABAGABAGABYAGABAGAAAHAAYAEAAADAAAEAAIADABYgCAAABAAAAAAIAAAAIAAAAIABAAIABAAYACAAACAAACAAYAOAAAPAAAQgBYAJAAAIgBAHAAIAHgBIABAAIAAAAIAAAAYgBAAAFAAgHABIACAAIADAAYAEAAAFAAAEAAYAEAAAFABAEAAYAFAAAFAAADAAYAJABAIAAAIABIANAAIAAAAYgBAAABAAAAAAIAAAAIABAAIACABIABAAIABAAYAAAAAAAAAAAAYgBAAgCAAgBgBYgBAAgDgBgBgBIgBAAIgCgBYgBgBgBAAgBgBYgCgBgBgBgBgBIgBgBIgBgBYgCgDACACgBgBIABACYAAAAACACgDgDYgDgEgBgFgBgCYAAgCgBgBAAgBYAAgCAAgBAAgBIAAgBIAAgBYAAAAABgHgBADIAAAAIAAACIAAABYAAAAAAAAAAAAIAAgCYAAgBABgCAAgBYACgFABgBACgCYAAAAADgDgBABIAAAAIgBABIAAAAIgCABYAAABgBAAAAABYABgBAAAAABgBYAAgBABgBABAAYABgBgBABAAAAYAAAAAAAAAAAAIgCABIgBAAIAAABIgEABIAAAAIgBAAIgCABYgIAEgIAEgJAEYgQAIgRAKgNAIYgIAEgIAEgHAEYgHADgGACgGADIgEACIgBAAIgBABYACgBgCABABAAIAAAAIgBAAIgDABYgDABgEABgEACYgHADgGACgJADYgCABgCABgCABIgDABIgBABIAAAAIgBAAIAAAAIgBABYgDACgDABgDADYgEADgDACgDADYgDADgCACgDADYgCACgCADgCADYgBABgBABAAABIgBABYAAAAABgBgBABIAAABIgBAAIAAABIgBACYgBACgBACgBADYgBACgBADgBACYgCAEAAAEgBAEYAAADgBADAAADYAAAFAAACAAAAIAAAAYAAAAACgCADgDYADgEAFgEAGgFYABgBACgBACgBYACgBACgCACgBIABgBIABgBIABAAIAAAAYgBABABgBgBABIAAgBYABAAACAAABgBYACgBACgBACgBYACgBADAAACgBYACAAACgBACAAYAEgBADAAADgBIABAAIABAAYgDABACgBAAABIAAAAIAAAAIACAAIAFAAYAGAAAHAAAHAAYAEAAAEAAAEAAIADAAIAEgBIAHgBYAKgBAKgCAIgCYAJgCAIgDAIgDYAFgBAEgBAFgCYAEgBAEgCAEgBYAJgDAJgEAIgDYAJgDAIgEAJgEIACAAIAAgBIABAAYgHADAFgCgCABIABgBIAFgBIAFgCIAGgDYACgBABgBADgBYADgCADgCADgDIAEgDIABgBIACgCIAAAAIACgBYAFgGAEgGAEgJYABgCAAgDABgCIABgEIAAgBIAAgBIABgFIAAgBIAAgEYAAgCAAgCgBgDYAAgCgBgDAAgCYgBgEgDgIgEgGYgDgEAAABAAgBIgBgBIgCgCIgBgBIgCgCYgBgBgCgBgBgBYgCgCgCgBgBgBIgDgBIgBgBYgEgCgFgBgEgBYgDgBgEAAgDgBIgCAAIgBAAIgCAAIgEAAYgFAAgGAAgFAAYgKABgKAAgKABYgJABgJABgJACYgEAAgEABgFABIgJABIgFACYgJADgIADgHACYgQAGgOAFgOAFYgBABgCABgCABIgBAAIAAAAIgBAAIAAAAYAAABABgBgCABIgCABYgDABgDABgDABYgGADgFADgGACYgFACgFABgEACYgFACgEACgEABYgHADgHACgFABYgEABgDABAAAAIAAAA");
	this.shape_1.setTransform(243.2,96.8,1,1,0,0,0,-2.2,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#65402D").s().p("AjLA0YAAAAACAAADABYADABAFABAGABYAHAAAHACAJAAYAIAAAKABAKAAYAUAAAXgBAZgEYAGgBAGgBAGgBYAGgBAGgBAGgBYANgDANgDALgDYAHgCAGgCAGgCIACAAYgGABAFgBgCAAIAAAAIABAAIAAAAIABAAIAFgBIAKgCYAGgCAGgCAGgBYAGgCAGgCAGgBYAKgDALgDAKgDYAKgEAKgCAJgDYAKgCAIgEAIgCYAIgCAHgDAGgCYAFgCAFgCADgBYAEgCABAAAAAAIAAAAYAAAAgBgBgDgCYgDgCgEgDgGgDYgGgCgHgEgIgDYgIgEgJgCgKgDYgLgCgLgDgMgCYgMgBgNgBgOAAYgHAAgGAAgHABYgGAAgGABgHAAIgJACIgFAAIgBAAIgBABIAAAAIgEAAIgCABYgGABgGACgGACYgNADgMAEgNAEIgEACIgEABIgCABYgDABgDABgDABYgGACgFADgGACYgXAKgUALgSAKYgIAFgIAGgHAFYgHAFgGAFgEADYgFAEgEAEgCACYgDADgBABAAAAIAAAA");
	this.shape_2.setTransform(242.9,85.5,1,1,0,0,0,0,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#65402D").s().p("ACVhNYgGgCgHgCgGgBIgJgBIgJgBYgNgBgMABgMABYgGAAgHABgFABYgGABgGABgGACYgGABgFACgGABYgGACgFACgGACYgFADgFACgFACIgEACIgCABIgDABIgIAEYgEADgFADgFADYgFACgFAEgFAEYgGAEgFAEgFAEYgEAEgFAEgFAFYgEAEgEAEgEAFYgEAFgEAGgEAFIgCADYgBACgBACgBACYAAACgBABAAACYgBACgBABAAACYgBACAAAAAAACIADgBIgKAIYgDADgDACgDADYAAABgBABgBAAIgCADIgCACYgBABgBABgBABYgCACgBADAAACYgBACAAADAAACIAAAAYACgBABgBACAAYACAAACAAACAAIACABYABAAABAAABAAIADAAYABAAABABABAAYAEABAEAAADAAIAMACIACgBYAEgBAFgCAEgBYADgCAEgCACgBYADgCAEgCACgCYADgCACgCADgCIgDADYAFgCAFgCAEgCYAEgDAFgCAEgCYAFgCAEgCAFgDYAEgCAFgCAEgCYAEgCAEgCAEgDYAFgDAFgCAFgDIAHgEIABgBIABAAIAAAAIAAAAYAAAAgCABABgBIAAAAIACgBIADgCYAFgCAFgDAEgDYAJgGAJgFAJgGYAJgGAJgHAJgHYAEgDAFgEAEgEYAEgDAEgFAFgEIAHgGIAGgHYAFgEAEgFAEgFIAAAA");
	this.shape_3.setTransform(233.9,112.75,1,1,0,0,0,0,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C3D2E").s().p("AgKhRYAOgCAPgCAQgCIAWgCYAIAAAHgBAHgBYAIgBAHAAAIAAIAWgBYABAAACAAAAAAYAAABABAAAAAAYABAAABAAABAAYABABABAAAAAAYABABAAAAAAAAIAAAAIAAAAIAAAAYABAAgIgDADABIABABIAAAAIACABYABABADABgCAAYgBAAAAAAgBgBYAAAAAAAAAAAAIAAAAIAAAAYgEgFACADAAgBIAAABIAAAAIAAAAIABACIAAAAYAAAAAAAAAAAAYgBgBAAgBgBAAYAAgBgBgCAAgBIAAgCYAAgBAAgCAAgBYAAAAABgBAAAAYAAAAAAAAAAgBYAAAAAAAAAAAAYAAAAgBAAAAAAIgDABYgBABgCABgBAAIADgBYgPAEgOAFgPAEYgOAFgOAFgPAFIgFABIgBABIgBAAIAAAAIgDABIgDABIgKAFIgUAJIgUAJYgHADgHAEgHAEIgpAWIgVAMYgHADgGADgGAEYgaAPgaAQgaAQIAAAAYgVANgHAcANAVYAJAOAPAHAPAAYBAAABBgCA/gEYAhgCAggCAggDYAhgCAggEAggDIAFgBYAJgBAHgHABgJYAAgDABgCgBgDYAAgCAAgDgBgBYAAgCgBgCgBgCYgBgBAAgBgBgBIgBgCYgBgBgBgBgBgBYgBgCgBAAgBgBYgCgCgCgBgCgBIgBgBIgBAAIgQgIYgBAAAAAAgBgBIAAAAYAAAAgBAAgBAAYgBgBgBgBgBgBYgBgBgBgCgBgBYgCgCgBgBgBgCIgEgFIgBgCIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIgBgBIgJgKYgBgCgCgCgCgCIgFgEYgCgCgBgCgCgBIgGgEIgGgDYgCgBgCgBgCgBIgMgGIAAAAIAJAKYABABACABABACIAEAFIADAGYABABABACABACIADAFYABACABACABACIAFAMIAAABIAAABIABAAYAAACgBgDAAAAIAAAAIAAAAIAAAAIAAABIABADIACAHYABACABACABADYABACABACABADIAFAHYACADADADADACIgCgBIASAPIgCgCYAAABABAAAAABYAAAAAAAAAAAAYAAAAgBAAAAAAIAAAAIAAgBYgBAAAAgBAAgBYAAAAgBgBAAgBYAAgCAAgBAAgBIAWgRYgggEgggEghgCYgggDgggCghgCYg/gEhBgBhAgBIAXBTYAagPAZgQAagQYAGgEAHgEAGgEIASgLIAlgYYAGgDAEgFAHgDIAUgMIATgLIAKgEIADgCIAAAAIAAAAYAAAAgEACACgBIAAAAIABgBIABAAIAFgDYANgGAOgHANgHYAOgHANgGAOgIIADgBYADgCACgCADgCYACgBABgBABgCYACgBABgBACgCYACgCABgBACgCYABgCACgCABgDIACgEYABgCAAgBABgCYABgDABgEAAgDIAAgBYAAgBAAAAAAgBYAAgFgBgFgCgFYgBgCgCgDgBgCIgBgCIgBAAIgBgBIgDgEIgCgCYgCgCgCgBgCgCYgFgDgBAAgCAAIgGgDIgFgBYgEAAgCAAgDAAYgDAAgDAAgDABIgEAAYgCABAAAAgBAAIgXAHYgHACgIADgHACYgIADgHADgHADIgWAKYgDACgEABgDACIgKAGIgTALIAAAA");
	this.shape_4.setTransform(221.55,132.8,1,1,0,0,0,1.1,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C3D2E").s().p("ACVhNYgGgCgHgCgGgBIgJgBIgJgBYgNgBgMABgMABYgGAAgHABgFABYgGABgGABgGACYgGABgFACgGABYgGACgFACgGACYgFADgFACgFACIgEACIgCABIgDABIgIAEYgEADgFADgFADYgFACgFAEgFAEYgGAEgFAEgFAEYgEAEgFAEgFAFYgEAEgEAEgEAFYgEAFgEAGgEAFIgCADYgBACgBACgBACYAAACgBABAAACYgBACgBABAAACYgBACAAAAAAACIADgBIgKAIYgDADgDACgDADYAAABgBABgBAAIgCADIgCACYgBABgBABgBABYgCACgBADAAACYgBACAAADAAACIAAAAYACgBABgBACAAYACAAACAAACAAIACABYABAAABAAABAAIADAAYABAAABABABAAYAEABAEAAADAAIAMACIACgBYAEgBAFgCAEgBYADgCAEgCACgBYADgCAEgCACgCYADgCACgCADgCIgDADYAFgCAFgCAEgCYAEgDAFgCAEgCYAFgCAEgCAFgDYAEgCAFgCAEgCYAEgCAEgCAEgDYAFgDAFgCAFgDIAHgEIABgBIABAAIAAAAIAAAAYAAAAgCABABgBIAAAAIACgBIADgCYAFgCAFgDAEgDYAJgGAJgFAJgGYAJgGAJgHAJgHYAEgDAFgEAEgEYAEgDAEgFAFgEIAHgGIAGgHYAFgEAEgFAEgFIAAAA");
	this.shape_5.setTransform(233.9,112.75,1,1,0,0,0,0,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C3D2E").s().p("AigggYAAAAADABAEACYAEACAGADAJACYAEABAFABAGABYAFABAGABAGABYAGABAGAAAHAAYAEAAADAAAEAAIADABYgCAAABAAAAAAIAAAAIAAAAIABAAIABAAYACAAACAAACAAYAOAAAPAAAQgBYAJAAAIgBAHAAIAHgBIABAAIAAAAIAAAAYgBAAAFAAgHABIACAAIADAAYAEAAAFAAAEAAYAEAAAFABAEAAYAFAAAFAAADAAYAJABAIAAAIABIANAAIAAAAYgBAAABAAAAAAIAAAAIABAAIACABIABAAIABAAYAAAAAAAAAAAAYgBAAgCAAgBgBYgBAAgDgBgBgBIgBAAIgCgBYgBgBgBAAgBgBYgCgBgBgBgBgBIgBgBIgBgBYgCgDACACgBgBIABACYAAAAACACgDgDYgDgEgBgFgBgCYAAgCgBgBAAgBYAAgCAAgBAAgBIAAgBIAAgBYAAAAABgHgBADIAAAAIAAACIAAABYAAAAAAAAAAAAIAAgCYAAgBABgCAAgBYACgFABgBACgCYAAAAADgDgBABIAAAAIgBABIAAAAIgCABYAAABgBAAAAABYABgBAAAAABgBYAAgBABgBABAAYABgBgBABAAAAYAAAAAAAAAAAAIgCABIgBAAIAAABIgEABIAAAAIgBAAIgCABYgIAEgIAEgJAEYgQAIgRAKgNAIYgIAEgIAEgHAEYgHADgGACgGADIgEACIgBAAIgBABYACgBgCABABAAIAAAAIgBAAIgDABYgDABgEABgEACYgHADgGACgJADYgCABgCABgCABIgDABIgBABIAAAAIgBAAIAAAAIgBABYgDACgDABgDADYgEADgDACgDADYgDADgCACgDADYgCACgCADgCADYgBABgBABAAABIgBABYAAAAABgBgBABIAAABIgBAAIAAABIgBACYgBACgBACgBADYgBACgBADgBACYgCAEAAAEgBAEYAAADgBADAAADYAAAFAAACAAAAIAAAAYAAAAACgCADgDYADgEAFgEAGgFYABgBACgBACgBYACgBACgCACgBIABgBIABgBIABAAIAAAAYgBABABgBgBABIAAgBYABAAACAAABgBYACgBACgBACgBYACgBADAAACgBYACAAACgBACAAYAEgBADAAADgBIABAAIABAAYgDABACgBAAABIAAAAIAAAAIACAAIAFAAYAGAAAHAAAHAAYAEAAAEAAAEAAIADAAIAEgBIAHgBYAKgBAKgCAIgCYAJgCAIgDAIgDYAFgBAEgBAFgCYAEgBAEgCAEgBYAJgDAJgEAIgDYAJgDAIgEAJgEIACAAIAAgBIABAAYgHADAFgCgCABIABgBIAFgBIAFgCIAGgDYACgBABgBADgBYADgCADgCADgDIAEgDIABgBIACgCIAAAAIACgBYAFgGAEgGAEgJYABgCAAgDABgCIABgEIAAgBIAAgBIABgFIAAgBIAAgEYAAgCAAgCgBgDYAAgCgBgDAAgCYgBgEgDgIgEgGYgDgEAAABAAgBIgBgBIgCgCIgBgBIgCgCYgBgBgCgBgBgBYgCgCgCgBgBgBIgDgBIgBgBYgEgCgFgBgEgBYgDgBgEAAgDgBIgCAAIgBAAIgCAAIgEAAYgFAAgGAAgFAAYgKABgKAAgKABYgJABgJABgJACYgEAAgEABgFABIgJABIgFACYgJADgIADgHACYgQAGgOAFgOAFYgBABgCABgCABIgBAAIAAAAIgBAAIAAAAYAAABABgBgCABIgCABYgDABgDABgDABYgGADgFADgGACYgFACgFABgEACYgFACgEACgEABYgHADgHACgFABYgEABgDABAAAAIAAAA");
	this.shape_6.setTransform(243.2,96.8,1,1,0,0,0,-2.2,2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C3D2E").s().p("AjLA0YAAAAACAAADABYADABAFABAGABYAHAAAHACAJAAYAIAAAKABAKAAYAUAAAXgBAZgEYAGgBAGgBAGgBYAGgBAGgBAGgBYANgDANgDALgDYAHgCAGgCAGgCIACAAYgGABAFgBgCAAIAAAAIABAAIAAAAIABAAIAFgBIAKgCYAGgCAGgCAGgBYAGgCAGgCAGgBYAKgDALgDAKgDYAKgEAKgCAJgDYAKgCAIgEAIgCYAIgCAHgDAGgCYAFgCAFgCADgBYAEgCABAAAAAAIAAAAYAAAAgBgBgDgCYgDgCgEgDgGgDYgGgCgHgEgIgDYgIgEgJgCgKgDYgLgCgLgDgMgCYgMgBgNgBgOAAYgHAAgGAAgHABYgGAAgGABgHAAIgJACIgFAAIgBAAIgBABIAAAAIgEAAIgCABYgGABgGACgGACYgNADgMAEgNAEIgEACIgEABIgCABYgDABgDABgDABYgGACgFADgGACYgXAKgUALgSAKYgIAFgIAGgHAFYgHAFgGAFgEADYgFAEgEAEgCACYgDADgBABAAAAIAAAA");
	this.shape_7.setTransform(242.9,85.5,1,1,0,0,0,0,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B3C26").s().p("Ah7hGYALACAMAEALACIARADIARADYALACALADALACYALADAKABAKACYAWAFAVAFAVAEYAWAEAVAFAVAEIgDAAIABAAYAAAAABAAAAAAIgBAAIAAAAIgBAAIgCgBIgBgBIgDgCYgEgCgDgEgCgFIABADYgBgCgBgCgBgCYgBgCgBgCgBgDYAAgCgBgDAAgCYAAgCABgBAAgBIAAgDYAAgCABgCAAgBYABgBAAgBAAgBYABgBAAAAAAAAYABgCAAgBABgBIADgDYAAgCADgBgBAAIAAAAIAAAAIAAAAYgCABAFgCAAAAIgBAAIAAAAIgBABIgFABIgUAHYgGACgGABgGACIgJADIgKACIgUAFYgGABgHABgHACIgpAJIgWAFYgHACgHABgHACIgVAGYgHABgIADgHADYgHACgIADgHACIgLAEIgFACIgCABIAAAAIgDABIAAAAIAAAAIgDABIgFADIgGAEYgEADgEACgEAEYgCACgCACgBACYgCACgCADgCACYgDAGgCAHAAAGIgBADYACAHACAHACAHIAAgCYABABAAABAAABYAAABAAABAAACYAAABgBACAAABYgBACgBABgBACYgBADgCADgCAEYgDADgCADgDADIAAAAYAEgBAEgBAEgCYACgBACAAACgBYACgBACgBABgBYACgCACgBACgBYACgCABgBACgCYACgCABgCACgDYABgCABgDABgDIAAgCYABgHABgGABgGIAAADYACgBACAAAEgCYACAAADgBACgBIAJgBIACgBIABAAIAAAAYABAAgFACACgBIAAAAIAAAAIABAAIAGAAIAKgBYAHAAAHAAAHgBYAHAAAGgBAIAAIAWgBYAHAAAHgBAIAAIAVgCIAVgCIAWgCYAIgBAHgBAIgBIAXgFYADAAAEgBAEgBIAMgDYAIgCAIgDAIgCIAVgIIAFgCIAEgCIACgBIAFgCYAGgDAIgGAGgGYABgBAAgBABgBYACgDACgDACgDYAAgBABAAAAgCYABgBAAgBABgCYABgCAAgDABgDYAAgBAAgBABgCYAAgCAAgCAAgCYAAgDgBgEAAgEYgBgDgBgDgCgDYgBgDgCgDgCgDIACADYgDgFgEgFgFgEIgCgBIgBAAIgBgBIgDgCIgDgBYgBgBgBAAAAAAIgEgCIgDgBIgCAAIgFgCIgCAAYgBAAAAAAgBAAYgXgCgXgCgXgBIgjABYgMABgMAAgLABYgMABgLACgLACYgMABgLADgMACIgQAEIgRAFYgLADgLAFgLAEIAAAA");
	this.shape_8.setTransform(212.7,159.2,1,1,0,0,0,-2.2,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B3C26").s().p("AgKhRYAOgCAPgCAQgCIAWgCYAIAAAHgBAHgBYAIgBAHAAAIAAIAWgBYABAAACAAAAAAYAAABABAAAAAAYABAAABAAABAAYABABABAAAAAAYABABAAAAAAAAIAAAAIAAAAIAAAAYABAAgIgDADABIABABIAAAAIACABYABABADABgCAAYgBAAAAAAgBgBYAAAAAAAAAAAAIAAAAIAAAAYgEgFACADAAgBIAAABIAAAAIAAAAIABACIAAAAYAAAAAAAAAAAAYgBgBAAgBgBAAYAAgBgBgCAAgBIAAgCYAAgBAAgCAAgBYAAAAABgBAAAAYAAAAAAAAAAgBYAAAAAAAAAAAAYAAAAgBAAAAAAIgDABYgBABgCABgBAAIADgBYgPAEgOAFgPAEYgOAFgOAFgPAFIgFABIgBABIgBAAIAAAAIgDABIgDABIgKAFIgUAJIgUAJYgHADgHAEgHAEIgpAWIgVAMYgHADgGADgGAEYgaAPgaAQgaAQIAAAAYgVANgHAcANAVYAJAOAPAHAPAAYBAAABBgCA/gEYAhgCAggCAggDYAhgCAggEAggDIAFgBYAJgBAHgHABgJYAAgDABgCgBgDYAAgCAAgDgBgBYAAgCgBgCgBgCYgBgBAAgBgBgBIgBgCYgBgBgBgBgBgBYgBgCgBAAgBgBYgCgCgCgBgCgBIgBgBIgBAAIgQgIYgBAAAAAAgBgBIAAAAYAAAAgBAAgBAAYgBgBgBgBgBgBYgBgBgBgCgBgBYgCgCgBgBgBgCIgEgFIgBgCIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIgBgBIgJgKYgBgCgCgCgCgCIgFgEYgCgCgBgCgCgBIgGgEIgGgDYgCgBgCgBgCgBIgMgGIAAAAIAJAKYABABACABABACIAEAFIADAGYABABABACABACIADAFYABACABACABACIAFAMIAAABIAAABIABAAYAAACgBgDAAAAIAAAAIAAAAIAAAAIAAABIABADIACAHYABACABACABADYABACABACABADIAFAHYACADADADADACIgCgBIASAPIgCgCYAAABABAAAAABYAAAAAAAAAAAAYAAAAgBAAAAAAIAAAAIAAgBYgBAAAAgBAAgBYAAAAgBgBAAgBYAAgCAAgBAAgBIAWgRYgggEgggEghgCYgggDgggCghgCYg/gEhBgBhAgBIAXBTYAagPAZgQAagQYAGgEAHgEAGgEIASgLIAlgYYAGgDAEgFAHgDIAUgMIATgLIAKgEIADgCIAAAAIAAAAYAAAAgEACACgBIAAAAIABgBIABAAIAFgDYANgGAOgHANgHYAOgHANgGAOgIIADgBYADgCACgCADgCYACgBABgBABgCYACgBABgBACgCYACgCABgBACgCYABgCACgCABgDIACgEYABgCAAgBABgCYABgDABgEAAgDIAAgBYAAgBAAAAAAgBYAAgFgBgFgCgFYgBgCgCgDgBgCIgBgCIgBAAIgBgBIgDgEIgCgCYgCgCgCgBgCgCYgFgDgBAAgCAAIgGgDIgFgBYgEAAgCAAgDAAYgDAAgDAAgDABIgEAAYgCABAAAAgBAAIgXAHYgHACgIADgHACYgIADgHADgHADIgWAKYgDACgEABgDACIgKAGIgTALIAAAA");
	this.shape_9.setTransform(221.55,132.8,1,1,0,0,0,1.1,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B3C26").s().p("ACVhNYgGgCgHgCgGgBIgJgBIgJgBYgNgBgMABgMABYgGAAgHABgFABYgGABgGABgGACYgGABgFACgGABYgGACgFACgGACYgFADgFACgFACIgEACIgCABIgDABIgIAEYgEADgFADgFADYgFACgFAEgFAEYgGAEgFAEgFAEYgEAEgFAEgFAFYgEAEgEAEgEAFYgEAFgEAGgEAFIgCADYgBACgBACgBACYAAACgBABAAACYgBACgBABAAACYgBACAAAAAAACIADgBIgKAIYgDADgDACgDADYAAABgBABgBAAIgCADIgCACYgBABgBABgBABYgCACgBADAAACYgBACAAADAAACIAAAAYACgBABgBACAAYACAAACAAACAAIACABYABAAABAAABAAIADAAYABAAABABABAAYAEABAEAAADAAIAMACIACgBYAEgBAFgCAEgBYADgCAEgCACgBYADgCAEgCACgCYADgCACgCADgCIgDADYAFgCAFgCAEgCYAEgDAFgCAEgCYAFgCAEgCAFgDYAEgCAFgCAEgCYAEgCAEgCAEgDYAFgDAFgCAFgDIAHgEIABgBIABAAIAAAAIAAAAYAAAAgCABABgBIAAAAIACgBIADgCYAFgCAFgDAEgDYAJgGAJgFAJgGYAJgGAJgHAJgHYAEgDAFgEAEgEYAEgDAEgFAFgEIAHgGIAGgHYAFgEAEgFAEgFIAAAA");
	this.shape_10.setTransform(233.9,112.75,1,1,0,0,0,0,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B3C26").s().p("AigggYAAAAADABAEACYAEACAGADAJACYAEABAFABAGABYAFABAGABAGABYAGABAGAAAHAAYAEAAADAAAEAAIADABYgCAAABAAAAAAIAAAAIAAAAIABAAIABAAYACAAACAAACAAYAOAAAPAAAQgBYAJAAAIgBAHAAIAHgBIABAAIAAAAIAAAAYgBAAAFAAgHABIACAAIADAAYAEAAAFAAAEAAYAEAAAFABAEAAYAFAAAFAAADAAYAJABAIAAAIABIANAAIAAAAYgBAAABAAAAAAIAAAAIABAAIACABIABAAIABAAYAAAAAAAAAAAAYgBAAgCAAgBgBYgBAAgDgBgBgBIgBAAIgCgBYgBgBgBAAgBgBYgCgBgBgBgBgBIgBgBIgBgBYgCgDACACgBgBIABACYAAAAACACgDgDYgDgEgBgFgBgCYAAgCgBgBAAgBYAAgCAAgBAAgBIAAgBIAAgBYAAAAABgHgBADIAAAAIAAACIAAABYAAAAAAAAAAAAIAAgCYAAgBABgCAAgBYACgFABgBACgCYAAAAADgDgBABIAAAAIgBABIAAAAIgCABYAAABgBAAAAABYABgBAAAAABgBYAAgBABgBABAAYABgBgBABAAAAYAAAAAAAAAAAAIgCABIgBAAIAAABIgEABIAAAAIgBAAIgCABYgIAEgIAEgJAEYgQAIgRAKgNAIYgIAEgIAEgHAEYgHADgGACgGADIgEACIgBAAIgBABYACgBgCABABAAIAAAAIgBAAIgDABYgDABgEABgEACYgHADgGACgJADYgCABgCABgCABIgDABIgBABIAAAAIgBAAIAAAAIgBABYgDACgDABgDADYgEADgDACgDADYgDADgCACgDADYgCACgCADgCADYgBABgBABAAABIgBABYAAAAABgBgBABIAAABIgBAAIAAABIgBACYgBACgBACgBADYgBACgBADgBACYgCAEAAAEgBAEYAAADgBADAAADYAAAFAAACAAAAIAAAAYAAAAACgCADgDYADgEAFgEAGgFYABgBACgBACgBYACgBACgCACgBIABgBIABgBIABAAIAAAAYgBABABgBgBABIAAgBYABAAACAAABgBYACgBACgBACgBYACgBADAAACgBYACAAACgBACAAYAEgBADAAADgBIABAAIABAAYgDABACgBAAABIAAAAIAAAAIACAAIAFAAYAGAAAHAAAHAAYAEAAAEAAAEAAIADAAIAEgBIAHgBYAKgBAKgCAIgCYAJgCAIgDAIgDYAFgBAEgBAFgCYAEgBAEgCAEgBYAJgDAJgEAIgDYAJgDAIgEAJgEIACAAIAAgBIABAAYgHADAFgCgCABIABgBIAFgBIAFgCIAGgDYACgBABgBADgBYADgCADgCADgDIAEgDIABgBIACgCIAAAAIACgBYAFgGAEgGAEgJYABgCAAgDABgCIABgEIAAgBIAAgBIABgFIAAgBIAAgEYAAgCAAgCgBgDYAAgCgBgDAAgCYgBgEgDgIgEgGYgDgEAAABAAgBIgBgBIgCgCIgBgBIgCgCYgBgBgCgBgBgBYgCgCgCgBgBgBIgDgBIgBgBYgEgCgFgBgEgBYgDgBgEAAgDgBIgCAAIgBAAIgCAAIgEAAYgFAAgGAAgFAAYgKABgKAAgKABYgJABgJABgJACYgEAAgEABgFABIgJABIgFACYgJADgIADgHACYgQAGgOAFgOAFYgBABgCABgCABIgBAAIAAAAIgBAAIAAAAYAAABABgBgCABIgCABYgDABgDABgDABYgGADgFADgGACYgFACgFABgEACYgFACgEACgEABYgHADgHACgFABYgEABgDABAAAAIAAAA");
	this.shape_11.setTransform(243.2,96.8,1,1,0,0,0,-2.2,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B3C26").s().p("AjLA0YAAAAACAAADABYADABAFABAGABYAHAAAHACAJAAYAIAAAKABAKAAYAUAAAXgBAZgEYAGgBAGgBAGgBYAGgBAGgBAGgBYANgDANgDALgDYAHgCAGgCAGgCIACAAYgGABAFgBgCAAIAAAAIABAAIAAAAIABAAIAFgBIAKgCYAGgCAGgCAGgBYAGgCAGgCAGgBYAKgDALgDAKgDYAKgEAKgCAJgDYAKgCAIgEAIgCYAIgCAHgDAGgCYAFgCAFgCADgBYAEgCABAAAAAAIAAAAYAAAAgBgBgDgCYgDgCgEgDgGgDYgGgCgHgEgIgDYgIgEgJgCgKgDYgLgCgLgDgMgCYgMgBgNgBgOAAYgHAAgGAAgHABYgGAAgGABgHAAIgJACIgFAAIgBAAIgBABIAAAAIgEAAIgCABYgGABgGACgGACYgNADgMAEgNAEIgEACIgEABIgCABYgDABgDABgDABYgGACgFADgGACYgXAKgUALgSAKYgIAFgIAGgHAFYgHAFgGAFgEADYgFAEgEAEgCACYgDADgBABAAAAIAAAA");
	this.shape_12.setTransform(242.9,85.5,1,1,0,0,0,0,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B3C26").s().p("ADLiRYgMAPgQAFgQAEIgNACYgEAAgEAAgFABYgEAAgEAAgEABIgHAAIgHAAIgbABIgOAAIgGAAIgEAAIgBAAIgBAAYAAABABgBgCABIAAAAIgBAAYgJABgJABgJABYgEAAgGACgFABIgOADIgDABIgCAAIgBAAYABAAgCABAAAAIAAAAIgBAAIgGACIgNAEYgIADgJADgIACYgJADgIADgJADIgGACIgGABYgDABgEABgDABYgEAAgDABgDABIgFAAYgCAAgBAAgCAAIgOABIgHABIgBAAIgDAAIgDABYgFAAgDAAgJACIgFABIgDABIgCAAIgEACIgEACIgBAAIgBABIgCABYgCABgDABgCACYgDABgCACgCACYgDADgEADgDADIgEAFIgBACIgBAAIAAABYAAgBgFAIACgDIgBABIgBADYgBABAAAAAAABIgCAFYgCADgBADgBADYgBAEAAACAAADYgBAFAAAGABAGIAAAEIABABYgCgEADALAAgBIAAAAIAAABIABADIABACYABABABACABACYABAEADAEACADYACACABACABABIADADYACABACACACACIADADIADABIAGAEIADABIABABIABAAIAEACIADABIAGACYACABADABADABIAKACIAJACIAIABIAaAEYAkAGAjAFAkAFIAyAIYASADARADARADYASACARACASADIA1AIIgXglYABgBAAgBABgBYABgBABgCABgBYABgBABgBACgBYABAAAAgBABAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIgBABYABAAACgBABAAYAAAAABABABAAYAAAAAAAAAAAAIACABYAAgBgBAAgBAAIgBAAYgBAAgBgBAAAAIgKgEIADABIgIgFIgCgCIgBAAIAAgBIgBAAIAAAAYAAAAACACgBgBIAAAAIAAAAIgEgEIgPgMIgIgHYgDgCgCgCgCgCIgNgNYgDgDgCgBgCgDIgHgHIgNgPYgFgFgEgEgEgFIgNgQIAAAAIAGAUYACAFABAHADAGIAIATIAEAKYACADACADABADIALASYACADACAEABADIAGAIIAMAQIADAEIAAABIAAAAIABABIAAAAIAAAAIABABIACACIAGAIIABAAIACACIALAJYABABABABACABIAEACYADACADABADACIAAAAIACAAYACABACAAADABYACAAADAAACAAYAEAAAEgBADgBIABAAIABAAIABAAIAAAAIABgBYADgBADgBACgCYADgCADgCADgCYACgDACgDACgDYABgDACgEABgDYAEgOgIgQgOgFIgFgBYgRgGgRgGgRgFYgSgFgRgGgSgEYgRgFgSgFgSgEYgSgFgRgEgSgEYgigHgkgGgjgFIgagEYgGAAgBgBgDAAIgDgBYgCAAgBAAgCgBIgGgCIgEgBIAAAAYABABgEgCAGACIAAAAIAAAAIAAAAYAAAAAAAAAAAAYAAAAAAAAAAAAYAAAAAAABAAAAYABAAAAAAAAABYABAAAAAAAAAAYAAABABABABAAYABACABACABABYAAABAAABAAABIAAgCIgCgCIAAgBIAAAAYAAgBADAKgBgFIAAAAYAAABAAAAAAAAYAAACAAABAAACYgBAAAAADgBACYAAABgBAAAAAAYAAABAAgBAAgBIACgDIABgBYACgEgFAJAAgBIAAAAIAAAAIAAAAYAAAAAAAAAAAAYAAgBAAABAAAAYAAAAgBAAAAABYgBAAgBAAAAAAIgBAAIABAAIABgBIADgBIABAAIAAAAYgIADAGgDgCABIAAAAIABAAIABAAYAAgBAGgBAEgBIADAAIABgBIAAAAYAAAAgCABABAAIAAgBIACAAIAHgBIANgCYACAAADgBADgBIAIgCYAGgBAFgCAFAAYAFgCAFgCAFgCIAIgDIAGgDYAIgEAIgEAIgEYAIgEAIgEAIgEIALgGIAGgDIAAgBIABAAYAAAAgCABABgBIAAAAIACAAIACgCIALgEYAEgCADgCAEgBYAJgDAIgDAJgDIABAAIAAAAYgCAAACAAgBAAIAAAAIACAAIADgBIAHgCIANgEIAagIIAGgCIAGgCYAFgBAEgCAFgBYAFgCAEgCAEgCIANgHYAEgDAEgCAEgDYAEgEAEgCADgEIAFgGYABgCABgCABgCYADgEABgFACgEIAAAA");
	this.shape_13.setTransform(203.05,175.2,1,1,0,0,0,0.6,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B3C26").s().p("AgahnYARADAQAEARACYARADARADARACYARACASACARACYARACARACARACIgEg5IgZABYgJABgIABgJACYgJABgIABgJACIgZAGIgZAIIgGACIgBAAIAAAAIgBAAIgBABIgCAAIgDACIgLAEIgWAKIgKAEYgEACgEACgEACIgtAYIgWALIgVAMIgqAYIgVALIgDABIAAABIgGAEIgBAAIAAABIgBABIgDABYAAAAgCACgBACYgCABgBACgBACYgDADgDAEgCADIAAABYABgBgFAMACgFIAAAAIAAAAIgBABIAAABIAAAAYAAABgBACAAABYgBAGgBAGABAGYABAGABAEACAFYABACACADABACYABABABACACABYACADADADADACIABABYAGAEAGADAGAAIAUACYAHABAGAAAGAAIARgBYAGAAAGAAAFgBYALgBAMAAAKgCIAhgEIAdgEIAHAAIAHgBIAOgBYAEAAAFAAAEAAIAOAAYACAAACAAACABIAGAAIANACIAEABYABAAAAAAAAAAYAAAAAAAAgBAAIAAAAYgBAAgCgBgBgBYgBAAgBgBgBAAYAAgBgBAAAAgBIAAAAIAAAAIAAAAYADAEgIgKABABIAAAAIAAAAIAAAAIAAABIAAAAIABABIABAAIAAABIgBgCYgBgBgBgCgBgCYgBgFgBgEABgEYAAgCAAgCABgCYAAgCABgBABgCIASgQYgKAFgKAEgKAFYgFACgGACgFACIgPAGYgGACgFABgFACIgPAFYgLADgLACgLADIgJACIgJACIgRADYgMADgLACgMADIgEABIAAAAIgBAAIAAAAYABAAgCAAABAAIgBAAIgBABIgCAAIgJADYgFACgGACgGADYgGACgFAEgFADYgGADgEAEgFAEIAAAAYAGgCAFgCAGgBYAGgBAFgBAGAAYAGAAAFgBAGAAIAJAAIACAAIACAAIAAAAYABAAgCAAAAAAIAAAAIABAAIAAAAIAEAAYAMABAMABAMABIASABIAIAAIAKAAYAGAAAGAAAGAAYAHAAAGAAAFgBIATgBYAGgBAGAAAGgBIATgEYAGgBAGgBAGgBYAMgEANgDAMgDYAHgDAGgEADgHIABgCYACgCABgDABgDYABgCAAgDABgDYAAgGAAgGgCgGYgBgDgCgDgBgDIgCgDIgBgBIAAAAIAAAAIgEgFIAAAAIgBgBYgCgCgCgCgCgBYgCgCgDgBgCgBYgFgDgFgCgGgBIAFABIgSgFIgKgDYgDAAgDgBgDAAIgSgCYgGgBgGgBgGAAIgSAAIgJgBIgHABIgQAAIgRABIgfACYgKABgKAAgJABYgFAAgFAAgFAAIgOAAYgFAAgFAAgDAAIgMgBIAUAIYACACACACACACYABABABABAAABYACACABACABABYABAEABAEABAEYABAFgBAGgBAEYAAACgBABAAABIAAAAIAAgBIABgBIAAAAIAAAAYACgFgFALABgBIgBAAYAAADgCACgBABYgBABgBABgBABYgBAAgBABABAAIACgCIABgBIABgBIAAAAIAAAAYgMAJAJgGgDACIAAgBIADgBIAVgMIApgZIAqgZIAlgXYAEgCADgDADgBIALgGIAVgMIALgGIADgBIABgBIAAAAYgDACACgBgBAAIABAAIAAAAIABgBIAFgCIAUgJIAVgIYAHgDAHgCAHgDYAIgCAHgCAHgCIAWgGIAGgBYAPgEAJgQgDgPYgEgNgNgJgNACYgRABgRACgRACYgRACgSACgRACYgRACgRADgRADYgRACgQAEgRADIAAAA");
	this.shape_14.setTransform(198,206.1,1,1,0,0,0,0.3,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B3C26").s().p("ACph3IgkgIYgFgBgGgBgGAAIgTgCYgGAAgGgBgGAAYgHgBgGABgGABYgMAAgNABgMABIgkAHIgJACIgCAAIAAAAIAAAAIgBAAIgCABIgCABIgEABIgRAGIgQAGIgSAGYgLAEgLAEgLAFIgCABYgNAGgNAFgMAGIgmARIAEgCYgDABgDACgEACYgDACgDACgDADYgDADgDADgCAEYgCADgCADgBAEYgBABAAACAAACIgBAAYAAAFgBAEAAAFYABAEABAFACAEYAAACABACABACYABABABACABACYABABABACABABIADADYACACACABACACYABAAABABAAABIACABYAEACACABADACYAAAAABABABAAIAAAAIAPAFIAIADIAHABYAJACAKADAJAAIANACYAFAAAEAAAFAAIANABIAKAAIAvAAIAYAAIAGAAIABAAIAAAAIAAAAIAAAAYABAAgKgBAFABIABAAIADAAIALACIAGABYACAAABABABAAIAJACYAFABAHACAHACYADACADAAAEACIAKAEIAKADIACABIAAAAIAAAAYgCgBACABgBAAIAAAAIABAAIABABIAGACIAVALYAIADAGADAHAEYANAHAOAHANAHIAUhJYgOABgOABgOABYgOABgOABgOABYgcACgcADgdADYgbADgcAEgcAEYgOACgOADgOACYgHABgHACgHABIgVAEIAAAAIAVAEYAHABAHACAHABYAOACAOADAOACYAcADAcAEAbADYAdADAcADAcACYAOABAOABAOABYAOABAOABAPAAYAVABASgQABgWYAAgOgHgMgLgIIgDgBYgOgJgOgKgOgIYgHgFgHgEgHgEIgUgMIgGgDIgBAAIgBgBIgCgBIgDgBIgMgEIgMgGYgEgBgEgCgEgBYgJgDgIgDgKgDIgOgDYgCgBgDgBgCAAIgGgBIgMgCIgDAAIgBAAIgEgBIAAAAIgBAAIAAAAIgGAAIgYAAIgwABIgGAAIgIAAIgKAAYgEAAgDABgEgBIgKAAYgGAAgGgBgHgBIgEgBIgEgBYgDgBgCAAgDgBIADABYAAAAAAAAAAABIABAAYAAAAAAABABAAYAAAAAAABACABYAAAAABABAAABIACACYABABAAABABABYAAABABABABACYABADABADAAAEYAAADAAADgBACIgCAGYAAABgBACgBACYgBACgCABgBACYgCACgCABgCABYgBABgCABgCAAIAEgCIAmgUYAMgIAMgHANgIIgDABYALgFAKgGAKgGIAIgFYABAAACgBAAgBIAEgCIAQgJIAPgIIAEgDIACgBIAAAAYgBABADgCgEACIAAAAIAAAAIABAAIABgBIAGgDIAfgOYALgDALgEALgEYAFgBAGgDAFgBYAGgBAFgBAGgCIARgEYAFgCAGAAAGgBIAkgGIAAAA");
	this.shape_15.setTransform(178.6,230,1,1,0,0,0,0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},140).to({state:[{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},8).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_13}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_13},{t:this.shape_14}]},3).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_13},{t:this.shape_14},{t:this.shape_15}]},3).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sand
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egq7gGeMA5UgF8IccAyIAKYDMhVwAAAQgFk0gEkwQgHphAGAMg");
	this.shape.setTransform(274.9186,320.525,1.3846,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EgqxAMbIgJpkQgHphAGAMMA5UgF8IccAyIAKYDg");
	this.shape_1.setTransform(274.9186,320.525,1.3846,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.redglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag4A5QgYgYAAghQAAggAYgYQAYgYAgAAQAhAAAYAYQAYAYAAAgQAAAhgYAYQgYAYghAAQggAAgYgYg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redglow, new cjs.Rectangle(-8.1,-8.1,16.2,16.2), null);


(lib.legUpper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB24C").s().p("AA4BeIiGilQABgFAEgGQAIgLAPAAICBC7g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legUpper, new cjs.Rectangle(-7.9,-9.3,15.9,18.700000000000003), null);


(lib.legLower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB24C").s().p("AhOCEIB0jsQgEgFgCgHQgEgNAIgIIAjADQAKAEgDAIQgEAOgLABIhzD1g");
	this.shape.setTransform(0.0083,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legLower, new cjs.Rectangle(-7.9,-13.8,15.8,27.700000000000003), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#955B3B").s().p("AgBgfIADgDIgCBFg");
	this.shape.setTransform(0.225,3.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,0.5,7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C88863").s().p("Ag1ABQAkgcAZgIQAsgNACAxQgFAVgQALQgJAGgLAAQgaAAgogmg");
	this.shape.setTransform(5.35,3.8806);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,10.7,7.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49382F").s().p("Ag0gPQgHgJAEgDQA3A0AigTQARgIAGgUQABAGgBAHQgEAVgPALQgJAFgKAAQgbAAgsgrg");
	this.shape.setTransform(5.7406,2.8239);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,11.5,5.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C88863").s().p("AgfAhQgQgLgEgVQACgxArANQAYAIAiAcQgmAmgaAAQgLAAgIgGg");
	this.shape.setTransform(5.225,3.8806);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,10.5,7.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65402D").s().p("AgkAXQgPgLgEgVIAAgNQAGAUARAIQAhATA2g0QAEADgHAJQgrArgbAAQgKAAgIgFg");
	this.shape.setTransform(5.6352,2.8239);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,11.3,5.7), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65402D").s().p("AgSAdQgkgDgXgWQgMgLgFgKQAIAIANAIQAaAPAegBQAdgCAtgTQAVgKAQgKQgNAQgWAOQgmAbghAAIgGAAg");
	this.shape.setTransform(9.45,2.9384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,18.9,5.9), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C88863").s().p("AgZAGQgggIghALQACgJAMgGQAagNA0AQIAVgKQAegIAmAOQgNgDgTABQgjAEgZAWQgJgHgPgEg");
	this.shape.setTransform(9.1,1.6911);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,18.2,3.4), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AggASIAhgxIAgAxIggAOg");
	this.shape.setTransform(3.275,3.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,6.6,6.5), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgdgdIA7AMIgOAgIggAPg");
	this.shape.setTransform(3,2.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,6,6), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgfABIAxgiIAOAhIgNAig");
	this.shape.setTransform(3.225,3.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,6.5,6.8), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgRgdIAgAOIAPAgIg7ANg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,6,6), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AghgRIAhgOIAhAMIggAzg");
	this.shape.setTransform(3.35,3.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,6.7,6.5), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgdATIANggIAggQIAOA7g");
	this.shape.setTransform(3.025,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0,6.1,5.9), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgfAAIANggIAyAfIgwAig");
	this.shape.setTransform(3.225,3.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,6.5,6.6), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgOARIgOgfIA5gQIgJA9g");
	this.shape.setTransform(2.875,3.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,5.8,6.2), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AABgXIAQAgIghAPg");
	this.shape.setTransform(1.65,2.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,3.3,4.9), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgRgXIAjAPIgOAfg");
	this.shape.setTransform(1.75,2.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,0,3.5,4.7), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgWgBIAfgOIAOAfg");
	this.shape.setTransform(2.275,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,4.6,3.2), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgJgQIAhAOIgvATg");
	this.shape.setTransform(2.375,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0,4.8,3.3), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgQgJIAhgOIgTAvg");
	this.shape.setTransform(1.675,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,3.4,4.8), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgQAKIANghIAUAvg");
	this.shape.setTransform(1.675,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,3.4,4.8), null);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgXgQIAvASIggAPg");
	this.shape.setTransform(2.4,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,4.8,3.4), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgXAEIAvgUIgOAhg");
	this.shape.setTransform(2.375,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,4.8,3.4), null);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8EB7").s().p("AguAOQAJgKARgJQAfgUAkABIgiAyg");
	this.shape.setTransform(4.675,2.5494);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,9.4,5.1), null);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgUANQAKglAXgWIAMA6IgxAjQAAgOAEgUg");
	this.shape.setTransform(2.525,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,5.1,9.4), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8EB7").s().p("AgEAXQgTgegCgnIAzAiIgMA6QgJgHgJgQg");
	this.shape.setTransform(2.575,4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,5.2,9.3), null);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8EB7").s().p("AAQAVQgjgIgbgYIA7gNIAiAxIgFAAQgLAAgPgEg");
	this.shape.setTransform(4.725,2.5091);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,9.5,5), null);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8EB7").s().p("AgNgZIA7ALQgXAZgkAKQgSAFgPAAg");
	this.shape.setTransform(4.65,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,9.3,5.2), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgYgLIAxgjQABANgEATQgIAkgYAZg");
	this.shape.setTransform(2.485,4.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,5,9.5), null);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF8EB7").s().p("AgZAPIAJg8QAKAIAJAQQAVAeACAlg");
	this.shape.setTransform(2.55,4.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,5.1,9.3), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgsgYQAOAAASAEQAjAIAWAWIg5APg");
	this.shape.setTransform(4.475,2.4975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,9,5), null);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgHAIIAHgoIAIAoIgIAZg");
	this.shape.setTransform(0.8,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,1.6,6.6), null);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgKABIAdgaIgQAkIgVAPg");
	this.shape.setTransform(1.9,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,3.8,5.2), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgdAJIAWgOIAlgEIghASg");
	this.shape.setTransform(2.975,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,6,1.9), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgHAGIgWgPIAaAAIAhASg");
	this.shape.setTransform(3,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,6,1.9), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgKAAIgJgZIAVAQIASAjg");
	this.shape.setTransform(1.975,2.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,4,5.1), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgHgIIAHgZIAIAZIgHAqg");
	this.shape.setTransform(0.775,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,1.6,6.8), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgCgJIAUgRIgHAZIgcAcg");
	this.shape.setTransform(1.775,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,3.6,5.4), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AADgJIAagBIgUAPIglAGg");
	this.shape.setTransform(2.925,1.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,5.9,2.3), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgdgIIAmABIAVAOIgaACg");
	this.shape.setTransform(3,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,6,1.7), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AAAAKIgTgiIAfAYIAIAZg");
	this.shape.setTransform(2.025,2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,4.1,5), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgPgFIAPgcIAQAcIgPAmg");
	this.shape.setTransform(1.625,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,3.3,6.7), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgOAJIgJggIAeAJIARAmg");
	this.shape.setTransform(2.425,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,4.9,4.8), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AgOgGIAmgRIgPAmIggAJg");
	this.shape.setTransform(2.375,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,4.8,4.8), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgGAPIgRglIAnAOIAIAfg");
	this.shape.setTransform(2.4,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,4.8,4.6), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgGgOIAcgKIgGAeIglATg");
	this.shape.setTransform(2.225,2.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,4.5,5), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08EBC").s().p("AggACIAmgRIAbAPIgaAQg");
	this.shape.setTransform(3.3,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,6.6,3.3), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgPAFIAPgmIAQAlIgQAdg");
	this.shape.setTransform(1.625,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,3.3,6.7), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AghAAIAdgPIAmAPIglAQg");
	this.shape.setTransform(3.4,1.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,6.8,3.3), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgWgNIAtARIgdAKg");
	this.shape.setTransform(2.275,1.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,4.6,2.8), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgXAGIAvgTIgRAbg");
	this.shape.setTransform(2.375,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,4.8,2.8), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AAFgXIAJAfIgcAQg");
	this.shape.setTransform(1.45,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,2.9,4.8), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B85362").s().p("AgXgEIAfgJIAQAbg");
	this.shape.setTransform(2.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,4.8,2.8), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgEgEIAIgdIABBCg");
	this.shape.setTransform(0.525,3.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,1.1,6.7), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AggACIAlgKIAcAIIgbAJg");
	this.shape.setTransform(3.3,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,6.6,1.8), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AAGgCIgdgUIAhARIAOAcg");
	this.shape.setTransform(2.4,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,4.8,4.6), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F3840").s().p("AgIAAIAIgbIAJAbIgJAcg");
	this.shape.setTransform(0.925,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,1.9,5.6), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgFgIIAYgMIglApg");
	this.shape.setTransform(1.925,2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,3.9,4.1), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgfAAIAqgOIAVAOIgUAOg");
	this.shape.setTransform(3.2,1.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,6.4,2.9), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C3DB").s().p("AgBgKIgIgVIATASIgSAtg");
	this.shape.setTransform(1.025,3.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,2.1,6.5), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE667F").s().p("AgRAAIgGgVIAZABIAVAqg");
	this.shape.setTransform(2.35,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,4.7,4.4), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE667F").s().p("AgCAUIgUgqIAZAhIAUAMg");
	this.shape_1.setTransform(2.3,2.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,4.6,4.5), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE667F").s().p("AgKgMIAPgTIAGATIgEAsg");
	this.shape_1.setTransform(1.075,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,2.2,6.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE667F").s().p("AgNANIANgsIAOAsIgOATg");
	this.shape_1.setTransform(1.425,3.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,2.9,6.5), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08EBC").s().p("AgIgNIAiAGQgVAPgeAGg");
	this.shape_1.setTransform(2.6,1.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,5.2,2.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C3DB").s().p("AgNAEQgLgFgIgGIAqgLIAWAlQgWgCgXgNg");
	this.shape_1.setTransform(3.25,1.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,6.5,3.8), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08EBC").s().p("AgNgLQgEgNgBgJIAlAYIgJArQgPgUgIgZg");
	this.shape_1.setTransform(1.925,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,3.9,6.8), null);


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(-1.6,0.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAKQgJAJgNAAQgMAAgKgJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDB18B").s().p("AgfAgQgNgNAAgTQAAgSANgNQAOgOARAAQATAAANAOQAOANAAASQAAATgOANQgNANgTAAQgRAAgOgNg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA7E43").s().p("AgpAqQgRgRAAgZQAAgYARgQQARgSAYAAQAZAAAQASQASAQAAAYQAAAZgSARQgQARgZAAQgYAAgRgRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye2, new cjs.Rectangle(-5.9,-5.9,11.8,11.8), null);


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B0F0").s().p("Ag6AJQAAgLARgJQASgJAXAAQAZAAARAJQARAJAAALQAAAMg7AAQg6AAAAgMg");
	this.shape.setTransform(-0.075,-3.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(0.125,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAJQgJAKgOAAQgMAAgJgKg");
	this.shape_2.setTransform(0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDB18B").s().p("AgfAgQgOgNAAgTQAAgRAOgOQANgOASAAQATAAAOAOQANANgBASQABATgNANQgOAOgTAAQgSAAgNgOg");
	this.shape_3.setTransform(0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA7E43").s().p("AgoApQgSgQAAgZQAAgYASgQQARgSAXAAQAYAAASASQARAQAAAYQAAAZgRAQQgSASgYAAQgXAAgRgSg");
	this.shape_4.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye1, new cjs.Rectangle(-6,-5.9,12,11.8), null);


(lib.Cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg2IAfQMAAAg+fMBsRAAAMAAAA+fg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cover, new cjs.Rectangle(-346.5,-199.9,693,399.9), null);


(lib.Claw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB24C").s().p("AAHgQIiVAQICdgiIAaAHIBmAyIh2gbIiNAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Claw, new cjs.Rectangle(-14.3,-3.4,28.6,6.9), null);


(lib.BirdWing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91C84B").s().p("AicAfQgvhGA9gdQAUgJAcgEQAOgCAKAAQAtAAANAhQAGARgDARIBIAGIg0ARIBiAIIhgAUICkAGQhBAahKALQgkAGgdAAQheAAgjg1g");
	this.shape.setTransform(0.007,0.0079);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BirdWing, new cjs.Rectangle(-17.7,-8.4,35.5,16.8), null);


(lib.birdBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F4096").s().p("AifEXQhTgmgXhLQgahYA9h9IAGjTQAKgUAYgOQAxgdBKAYQA8ATAUBCQAOAugEBWIgFB9QAEA5AfAHQB1AYA6ilQATg0AKhBIAHg2IAGA+QAGBLgDBDQgMDYhkA3Qg+AihbADIgRAAQhVAAhBgeg");
	this.shape.setTransform(-4.9095,5.6982);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE3338").s().p("AgegBQAXhBAyAEIhVB9QABghALgfg");
	this.shape_1.setTransform(-11.625,-30.334);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0343E").s().p("AgdgDQAQgxAxAHIhHBcQgCgaAIgYg");
	this.shape_2.setTransform(-5.894,-24.8437);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1623B").s().p("AgagCQARgzAtAFIhGBiQgBgbAJgZg");
	this.shape_3.setTransform(-8.9513,-27.6182);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0343E").s().p("AghBYQAZg1AchCQA5iGAPhFIgIBCQgLBQgRBGQg3DdhcAgg");
	this.shape_4.setTransform(23.125,4.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1623B").s().p("AgOAsQAdiIAKhFIgCBuQgJB+gmBXg");
	this.shape_5.setTransform(23.325,-3.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birdBody, new cjs.Rectangle(-32.3,-36.6,64.69999999999999,73.30000000000001), null);


(lib.BirdBeak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6A6B6").s().p("AgIAAIARgHIAAAOg");
	this.shape.setTransform(14.875,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89734").s().p("AgmgSIA6gWIATAIIAAA5QghAIgsAHg");
	this.shape_1.setTransform(11.925,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECB63B").s().p("AhYAeICyhAIAAA6QhDALgxAAQgjAAgbgFg");
	this.shape_2.setTransform(-0.9,8.1061);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F89734").s().p("AgmAzIAAh4QAsgBAhAFIAACAIgTAHQgZgLghgIg");
	this.shape_3.setTransform(11.925,-4.5775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECB63B").s().p("AhyBVQgHgbAFggQALhBBAgaQBBgbBfgBIAAB4Qg9gNg1ALQhFAOgyA3g");
	this.shape_4.setTransform(-3.8413,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BirdBeak, new cjs.Rectangle(-15.7,-11.6,31.5,23.2), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eyeball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeball
	this.instance = new lib.eye1();
	this.instance.setTransform(220.95,27.65);
	this.instance._off = true;

	this.instance_1 = new lib.eye2();
	this.instance_1.setTransform(195.5,98.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},158).to({state:[{t:this.instance_1,p:{x:195.5,y:98.65}}]},6).to({state:[]},1).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1,p:{x:-65.05,y:151.95}}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({_off:true,x:195.5,y:98.65},6).wait(20).to({_off:false,x:143.2,y:157.1},0).to({x:60.7,y:154.5},12).to({x:22.45,y:153.65},6).to({x:-48.1,y:152.35},11).to({_off:true,x:-65.05,y:151.95},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eyeball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeball
	this.instance = new lib.eye2();
	this.instance.setTransform(195.5,98.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).wait(1).to({x:191.2542,y:110.5208},0).wait(1).to({x:186.9697,y:122.1678},0).wait(1).to({x:182.6852,y:133.8148},0).wait(1).to({x:178.4008,y:145.4617},0).wait(1).to({x:174.1163,y:157.1087},0).wait(1).to({x:168.9533,y:157.1075},0).wait(1).to({x:163.7902,y:157.1062},0).wait(1).to({x:158.6272,y:157.105},0).wait(1).to({x:153.4641,y:157.1037},0).wait(1).to({x:152.6413,y:157.103},0).wait(1).to({x:151.8185,y:157.1022},0).wait(1).to({x:150.9956,y:157.1015},0).wait(1).to({x:150.1728,y:157.1007},0).wait(1).to({x:149.35,y:157.1},0).wait(1).to({x:148.87},0).wait(1).to({x:148.39},0).wait(1).to({x:147.91},0).wait(1).to({x:147.43},0).wait(1).to({x:146.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Cover_White = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cover_White
	this.instance = new lib.Cover();
	this.instance.setTransform(275.55,201);
	this.instance.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},78).to({_off:true},1).wait(161));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Armature_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Armature_3
	this.ikNode_11 = new lib.BirdWing();
	this.ikNode_11.name = "ikNode_11";
	this.ikNode_11.setTransform(239.25,-12.55,0.9981,0.9981,9.4378,0,0,-8.1,1.2);

	this.ikNode_18 = new lib.BirdBeak();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(215.4,-40.35,0.9984,0.9984,4.2669,0,0,17.4,0.7);

	this.ikNode_17 = new lib.Claw();
	this.ikNode_17.name = "ikNode_17";
	this.ikNode_17.setTransform(247.35,41.55,0.998,0.998,-11.9369,0,0,5.5,-1.6);

	this.ikNode_16 = new lib.legLower();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(251.7,15.55,0.9983,0.9983,-11.9348,0,0,5.9,-11);

	this.ikNode_15 = new lib.legUpper();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.setTransform(237.1,1.15,0.9988,0.9988,-9.3003,0,0,-5.7,-6.3);

	this.ikNode_10 = new lib.birdBody();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(229.85,-8.05,0.9987,0.9987,-7.6327,0,0,-14.4,24);

	this.ikNode_14 = new lib.Claw();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(232.2,43,0.998,0.998,-12.2633,0,0,1.9,-1.1);

	this.ikNode_13 = new lib.legLower();
	this.ikNode_13.name = "ikNode_13";
	this.ikNode_13.setTransform(239,14.95,0.998,0.998,-12.2619,0,0,6.9,-11.2);

	this.ikNode_12 = new lib.legUpper();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(228.2,-1.6,0.998,0.998,-2.0941,0,0,-2.6,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_12,p:{rotation:-2.0941,x:228.2,y:-1.6,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-12.2619,x:239,y:14.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.998,scaleY:0.998,rotation:-12.2633,x:232.2,y:43}},{t:this.ikNode_10,p:{regX:-14.4,regY:24,scaleX:0.9987,scaleY:0.9987,rotation:-7.6327,x:229.85,y:-8.05}},{t:this.ikNode_15,p:{scaleX:0.9988,scaleY:0.9988,rotation:-9.3003,x:237.1,y:1.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:-11.9348,x:251.7,y:15.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.998,scaleY:0.998,rotation:-11.9369,x:247.35,y:41.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9984,scaleY:0.9984,rotation:4.2669,x:215.4,y:-40.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4378,x:239.25,y:-12.55,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},80).to({state:[{t:this.ikNode_12,p:{rotation:-2.1039,x:228.7,y:-0.15,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.269,x:239.45,y:15.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2687,x:234.1,y:43.35}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6342,x:232,y:1.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2998,x:239.15,y:4.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.941,x:253.35,y:17.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9412,x:249.55,y:43.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2742,x:215.45,y:-37.6,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.441,x:240.2,y:-13,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:228.6,y:0.15,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:239.5,y:16.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234,y:43.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6315,x:231.9,y:1.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.05,y:4.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.05,y:19.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.45,y:44.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.4,y:-34.05,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.1,y:-12.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:228.75,y:0.75,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:239.6,y:16.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.1,y:44.3}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6315,x:232,y:2.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.15,y:5.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.15,y:19.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.5,y:45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.5,y:-33.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.2,y:-11.9,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:228.85,y:1.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:239.7,y:17.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.2,y:44.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6315,x:232.1,y:3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.25,y:5.95,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.2,y:20.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.5,y:45.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.6,y:-32.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.3,y:-11.3,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:228.95,y:1.9,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:239.8,y:17.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.25,y:45.5}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.15,y:3.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.3,y:6.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.25,y:20.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.5,y:46.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.7,y:-32.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.35,y:-10.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.05,y:2.5,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:239.9,y:18.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.35,y:46.1}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.25,y:4.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.4,y:7.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.3,y:21.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.55,y:46.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.75,y:-31.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.45,y:-10.15,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.15,y:3.05,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240,y:19,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.45,y:46.65}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.35,y:4.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.5,y:7.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.35,y:21.8,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.55,y:47.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.85,y:-31.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.55,y:-9.55,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.25,y:3.65,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.1,y:19.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2651,x:234.5,y:47.25}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.45,y:5.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.55,y:8.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.45,y:22.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.6,y:47.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:215.95,y:-30.55,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.6,y:-8.95,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.35,y:4.25,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.25,y:20.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:234.6,y:47.85}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.5,y:5.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.65,y:8.9,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.5,y:22.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.6,y:48.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.05,y:-30,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.7,y:-8.4,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.45,y:4.8,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.35,y:20.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:234.7,y:48.45}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.6,y:6.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.75,y:9.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.55,y:23.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.6,y:49.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.1,y:-29.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.8,y:-7.8,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.6,y:5.4,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.45,y:21.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:234.8,y:49}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.7,y:7.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.8,y:10.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.6,y:24,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.65,y:49.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.2,y:-28.8,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.85,y:-7.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.7,y:5.95,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.55,y:21.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:234.85,y:49.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.75,y:7.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:239.9,y:10.7,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.65,y:24.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.65,y:50.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.3,y:-28.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:240.95,y:-6.65,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.8,y:6.55,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.65,y:22.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:234.95,y:50.2}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.85,y:8.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240,y:11.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.75,y:25.1,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.7,y:50.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.4,y:-27.65,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241,y:-6.05,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:229.9,y:7.15,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.75,y:23,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.05,y:50.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:232.95,y:8.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.05,y:11.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.8,y:25.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.7,y:51.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.45,y:-27.05,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.1,y:-5.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230,y:7.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:240.9,y:23.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.1,y:51.4}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233,y:9.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.15,y:12.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.85,y:26.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.7,y:52,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.55,y:-26.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.2,y:-4.9,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.1,y:8.3,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241,y:24.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.2,y:51.95}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.1,y:10}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.25,y:13.05,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.9,y:26.75,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.75,y:52.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.65,y:-25.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.25,y:-4.3,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.2,y:8.85,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.1,y:24.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.3,y:52.55}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.2,y:10.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.3,y:13.65,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:254.95,y:27.3,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.75,y:53.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.75,y:-25.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.35,y:-3.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.35,y:9.45,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.2,y:25.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.4,y:53.15}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.25,y:11.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.4,y:14.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.05,y:27.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.8,y:53.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.8,y:-24.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.45,y:-3.15,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.45,y:10,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.3,y:25.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.45,y:53.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.35,y:11.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.5,y:14.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.1,y:28.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.8,y:54.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:216.9,y:-24.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.5,y:-2.55,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.55,y:10.6,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.4,y:26.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.55,y:54.3}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.45,y:12.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.55,y:15.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.15,y:28.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.8,y:54.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217,y:-23.55,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.6,y:-1.95,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.65,y:11.2,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.55,y:27.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.65,y:54.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.5,y:12.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.65,y:16,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.2,y:29.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.85,y:55.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.1,y:-23,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.7,y:-1.4,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.75,y:11.75,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.65,y:27.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.7,y:55.5}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.6,y:13.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.75,y:16.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.25,y:30.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.85,y:56.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.15,y:-22.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.75,y:-0.8,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.85,y:12.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.75,y:28.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.8,y:56.1}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.7,y:14.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.8,y:17.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.35,y:30.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.9,y:56.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.25,y:-21.8,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.85,y:-0.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:230.95,y:12.9,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.85,y:28.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:235.9,y:56.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.75,y:14.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.9,y:17.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.4,y:31.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.9,y:57.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.35,y:-21.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:241.95,y:0.25,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.1,y:13.5,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:241.95,y:29.35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236,y:57.25}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.85,y:15.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:240.95,y:18.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.45,y:31.75,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.9,y:57.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.45,y:-20.65,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242,y:0.85,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.2,y:14.1,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.1,y:29.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.05,y:57.85}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:233.95,y:15.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.05,y:18.95,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.5,y:32.3,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.95,y:58.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.55,y:-20.05,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.1,y:1.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.3,y:14.65,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.2,y:30.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.15,y:58.45}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234,y:16.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.15,y:19.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.55,y:32.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:251.95,y:59,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.6,y:-19.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.15,y:2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.4,y:15.25,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.3,y:31.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.25,y:59.05}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.1,y:17}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.2,y:20.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.65,y:33.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252,y:59.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.7,y:-18.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.25,y:2.6,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.5,y:15.8,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.4,y:31.65,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.3,y:59.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.2,y:17.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.3,y:20.7,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.7,y:33.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252,y:60.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.8,y:-18.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.35,y:3.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.6,y:16.4,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.5,y:32.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.4,y:60.2}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.25,y:18.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.4,y:21.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.75,y:34.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252,y:60.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.9,y:-17.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.4,y:3.75,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.75,y:17,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.65,y:32.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.5,y:60.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.35,y:18.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.45,y:21.9,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.8,y:35.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.05,y:61.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:217.95,y:-17.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.5,y:4.35,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.85,y:17.55,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.75,y:33.35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.6,y:61.4}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.45,y:19.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.55,y:22.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.85,y:35.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.05,y:61.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.05,y:-16.55,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.6,y:4.95,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0978,x:231.95,y:18.15,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.85,y:33.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.65,y:62}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.5,y:19.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.65,y:23.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:255.95,y:36.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.1,y:62.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.15,y:-16,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.65,y:5.5,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0977,x:232.05,y:18.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:242.95,y:34.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.75,y:62.55}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.6,y:20.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.7,y:23.65,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256,y:36.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.1,y:63.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.25,y:-15.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.75,y:6.1,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0977,x:232.15,y:19.3,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.05,y:35.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.85,y:63.15}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.7,y:21.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.8,y:24.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.05,y:37.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.1,y:63.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.3,y:-14.8,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.85,y:6.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0977,x:232.25,y:19.9,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.2,y:35.65,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:236.95,y:63.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.75,y:21.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.9,y:24.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.1,y:37.8,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.15,y:64.2,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.4,y:-14.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:242.9,y:7.3,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0977,x:232.4,y:20.45,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.3,y:36.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:237,y:64.35}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.85,y:22.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:241.95,y:25.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.15,y:38.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.15,y:64.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.5,y:-13.65,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243,y:7.85,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:232.5,y:21.05,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.4,y:36.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2658,x:237.1,y:64.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:234.95,y:22.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.05,y:26.05,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.25,y:38.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.15,y:65.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.6,y:-13.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.05,y:8.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:232.6,y:21.6,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.5,y:37.35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.2,y:65.5}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235,y:23.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.15,y:26.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.3,y:39.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.2,y:65.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.65,y:-12.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.15,y:9.05,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:232.7,y:22.2,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.6,y:37.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.3,y:66.1}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.1,y:24}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.2,y:27.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.35,y:40,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.2,y:66.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.75,y:-11.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.25,y:9.6,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:232.8,y:22.8,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.75,y:38.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.35,y:66.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.2,y:24.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.3,y:27.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.4,y:40.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.25,y:67.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.85,y:-11.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.3,y:10.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:232.9,y:23.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.85,y:39.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.45,y:67.3}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.25,y:25.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.4,y:28.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.45,y:41.1,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.25,y:67.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:218.95,y:-10.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.4,y:10.8,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.05,y:23.95,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:243.95,y:39.65,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.55,y:67.85}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.35,y:25.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.45,y:29,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.5,y:41.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.25,y:68.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219,y:-10.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.5,y:11.35,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.15,y:24.5,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:244.05,y:40.25,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.65,y:68.45}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.45,y:26.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.55,y:29.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.6,y:42.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.3,y:68.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.1,y:-9.6,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.55,y:11.95,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.25,y:25.1,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:244.15,y:40.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.7,y:69.05}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.5,y:26.8}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.65,y:30.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.65,y:42.75,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.3,y:69.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.2,y:-9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.65,y:12.55,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.35,y:25.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:244.3,y:41.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.8,y:69.65}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.6,y:27.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.7,y:30.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.7,y:43.3,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.35,y:70,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.3,y:-8.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.75,y:13.1,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.45,y:26.25,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2654,x:244.4,y:41.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:237.9,y:70.25}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.7,y:28}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.8,y:31.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.75,y:43.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.35,y:70.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.35,y:-7.85,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.8,y:13.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.55,y:26.85,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:244.5,y:42.55,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238,y:70.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.75,y:28.55}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.9,y:31.95,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.8,y:44.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.35,y:71.2,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.45,y:-7.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.9,y:14.3,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.7,y:27.45,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:244.6,y:43.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.05,y:71.4}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.85,y:29.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:242.95,y:32.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.9,y:44.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.4,y:71.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.55,y:-6.65,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:243.95,y:14.85,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.8,y:28,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:244.7,y:43.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.15,y:72}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:235.95,y:29.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.05,y:33.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:256.95,y:45.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.4,y:72.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.65,y:-6.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.05,y:15.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:233.9,y:28.6,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:244.85,y:44.25,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.25,y:72.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236,y:30.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.15,y:33.7,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257,y:46.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.45,y:72.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.7,y:-5.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.15,y:16.05,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234,y:29.15,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:244.95,y:44.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.35,y:73.2}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.1,y:30.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.2,y:34.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.05,y:46.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.45,y:73.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.8,y:-4.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.2,y:16.6,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.1,y:29.75,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.05,y:45.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.4,y:73.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.2,y:31.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.3,y:34.9,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.1,y:47.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.45,y:74.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:219.9,y:-4.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.3,y:17.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.25,y:30.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.15,y:46,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.5,y:74.35}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.25,y:32.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.35,y:35.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.2,y:47.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.5,y:74.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220,y:-3.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.4,y:17.8,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.35,y:30.9,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.3,y:46.55,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.6,y:74.95}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.35,y:32.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.45,y:36.05,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.25,y:48.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.5,y:75.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.05,y:-3.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.45,y:18.35,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.45,y:31.5,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.4,y:47.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.7,y:75.55}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.45,y:33.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.55,y:36.65,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.3,y:48.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.55,y:75.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.15,y:-2.6,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.55,y:18.95,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.55,y:32.1,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.5,y:47.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.8,y:76.15}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.5,y:33.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.6,y:37.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.35,y:49.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.55,y:76.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.25,y:-2,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.65,y:19.55,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.65,y:32.65,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.6,y:48.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.85,y:76.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.6,y:34.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.7,y:37.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.4,y:49.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.55,y:77,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.35,y:-1.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.7,y:20.1,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.8,y:33.25,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.75,y:48.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:238.95,y:77.3}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:236.7,y:35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.8,y:38.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.5,y:50.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.6,y:77.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.4,y:-0.85,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.8,y:20.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:234.9,y:33.85,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.85,y:49.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:239.05,y:77.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6332,x:236.75,y:35.55}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.85,y:39,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.55,y:51.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9378,x:252.6,y:78.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.5,y:-0.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.9,y:21.3,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:235,y:34.4,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:245.95,y:50.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:239.15,y:78.5}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6332,x:236.85,y:36.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:243.95,y:39.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.6,y:51.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9368,x:252.65,y:78.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.6,y:0.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:244.95,y:21.85,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:235.1,y:35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:246.05,y:50.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:239.25,y:79.1}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6332,x:236.95,y:36.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:244.05,y:40.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.65,y:52.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9368,x:252.65,y:79.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.7,y:0.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:245.05,y:22.45,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0968,x:235.2,y:35.55,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.1,rotation:-12.2646,x:246.2,y:51.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2666,x:239.3,y:79.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6332,x:237,y:37.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2973,x:244.1,y:40.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9382,x:257.7,y:52.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9368,x:252.65,y:79.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2681,x:220.75,y:1.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:245.1,y:23.05,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3453,x:234.35,y:37.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-14.9552,x:240.85,y:54.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-14.9568,x:236.4,y:83.45}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:237.05,y:40.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2964,x:244.7,y:40.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9374,x:258.25,y:52.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9368,x:253.25,y:79.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2663,x:220.75,y:5.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:245.1,y:27.1,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7931,x:233.55,y:39.3,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6443,x:235.4,y:57.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6462,x:232.95,y:85.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6322,x:237.1,y:43.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-9.2955,x:244.05,y:40.65,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-11.9365,x:257.6,y:52.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.9361,x:252.6,y:79.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2646,x:220.75,y:9.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4376,x:245.05,y:31.1,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7888,x:234.3,y:39.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6387,x:236.4,y:57.35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6398,x:232.9,y:85.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.628,x:236.8,y:45.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:9.7296,x:241.5,y:44.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-16.576,x:251.25,y:60.4,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-19.1969,x:249.25,y:87.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2576,x:220.55,y:11.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4341,x:244.85,y:30.75,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7837,x:235.25,y:39.7,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6332,x:237.65,y:57.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6345,x:233.05,y:85.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6227,x:236.6,y:48.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7591,x:238.95,y:47.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-21.2158,x:243.55,y:66.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-26.4589,x:244.1,y:93.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2505,x:220.35,y:13.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4304,x:244.6,y:30.6,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7747,x:230.35,y:40.55,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6213,x:232.7,y:58.25,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6223,x:228.25,y:86.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6121,x:234.1,y:46.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7521,x:239,y:47.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-21.2063,x:243.45,y:66.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-26.4538,x:243.85,y:93.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.24,x:218.8,y:11.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4234,x:244.55,y:33.9,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7653,x:231.05,y:49.85,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6102,x:233.35,y:67.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6104,x:229.05,y:95.75}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.6015,x:231.6,y:44.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7443,x:238.55,y:47.65,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-21.1992,x:242.85,y:66.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-26.4499,x:243.1,y:93.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2294,x:217.2,y:9.85,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4144,x:243.25,y:38.55,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7594,x:227.25,y:46,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6094,x:229.9,y:63.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6077,x:225.45,y:91.65}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5962,x:231.05,y:49.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7403,x:239.45,y:56.05,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-21.198,x:243.8,y:74.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-26.4459,x:244.15,y:101.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2251,x:216.65,y:15.55,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.4111,x:242.65,y:44.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:26.7543,x:230.65,y:49.85,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-17.6085,x:233.55,y:67.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-17.6052,x:228.95,y:95.35}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.59,x:230.4,y:55.45}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7364,x:239.95,y:64.35,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-21.1964,x:244.5,y:82.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-26.4412,x:244.95,y:109.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2215,x:215.95,y:21.1,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.4082,x:242.1,y:49.8,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:33.1324,x:232.75,y:48.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-4.8283,x:233.7,y:66.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-24.3504,x:222.95,y:92.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5863,x:230.25,y:55.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7333,x:239.75,y:64.25,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-19.5157,x:244.1,y:82.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-27.7387,x:244.05,y:109.25,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2171,x:215.75,y:20.95,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.4039,x:242.1,y:49.5,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:39.5118,x:232.4,y:63.2,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:7.9495,x:231.15,y:82.1,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-31.0951,x:215.45,y:103.95}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5821,x:230.15,y:54.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7274,x:239.5,y:64.2,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-17.8359,x:243.75,y:83.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-29.0339,x:243,y:109.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2145,x:215.5,y:20.75,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.4013,x:242.1,y:49.2,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:45.8915,x:231.55,y:64.6,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:20.7299,x:228.1,y:83.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-37.841,x:208.4,y:101}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5793,x:230.05,y:54.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7243,x:239.3,y:64.15,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-16.1562,x:243.45,y:83.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9978,scaleY:0.9978,rotation:-30.3321,x:242,y:109.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.211,x:215.3,y:20.55,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3984,x:242.05,y:48.9,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:52.2703,x:231.3,y:65.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:33.512,x:225.45,y:84.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-44.5849,x:202.95,y:96.95}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.575,x:229.95,y:53.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7184,x:239.05,y:64.1,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-14.4753,x:243.1,y:84.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-31.6273,x:241.1,y:108.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2083,x:215.15,y:20.3,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3949,x:242.1,y:48.6,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:47.826,x:229.6,y:65.85,scaleX:0.9979,scaleY:0.9979,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:6.2631,x:225.6,y:84.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-40.2648,x:210.55,y:107.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5731,x:229.95,y:53.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.716,x:238.9,y:64.1,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-14.4728,x:243.05,y:84.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-31.627,x:241.15,y:108.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2066,x:215.05,y:20.15,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3939,x:242.05,y:48.4,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:43.3805,x:228.1,y:65.55,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-20.9795,x:225.75,y:83.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-35.9429,x:223.1,y:112.55}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5714,x:229.95,y:53.45}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:28.7137,x:238.75,y:64.1,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-14.4691,x:243,y:84.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-31.6258,x:241.2,y:108.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.204,x:214.95,y:20,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3931,x:242.05,y:48.2,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:30.1318,x:224.25,y:76.7,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-12.5532,x:225.65,y:95.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-27.518,x:218.8,y:123.6}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5706,x:225.75,y:65.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:17.0725,x:235.1,y:75.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-7.4557,x:243.2,y:93.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-24.6138,x:238.4,y:118.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.204,x:210.65,y:31.65,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3931,x:237.85,y:59.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:16.8825,x:220.35,y:87.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:-4.128,x:225.8,y:106.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-19.093,x:214.9,y:133.05}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5697,x:221.5,y:76.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:5.4321,x:231.35,y:86.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:-0.4423,x:243,y:103.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-17.6004,x:235.45,y:126.7,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2031,x:206.4,y:43.35,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3931,x:233.55,y:71.45,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:3.6328,x:216.55,y:98.85,scaleX:0.998,scaleY:0.998,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:4.2932,x:225.85,y:116,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-10.6682,x:211.15,y:141.05}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5688,x:217.2,y:88.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-6.203,x:227.55,y:97.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.5671,x:242.25,y:111.75,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-10.5879,x:231.85,y:133.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2031,x:202.1,y:54.95,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:229.3,y:83.1,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.6099,x:212.75,y:109.8,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:12.7192,x:225.65,y:125.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-2.2434,x:207.4,y:147.7}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5679,x:212.95,y:99.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.8425,x:223.75,y:108.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:13.5798,x:240.85,y:119.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-3.5743,x:227.9,y:140.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2022,x:197.8,y:66.6,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:225,y:94.7,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-22.8589,x:208.9,y:120.85,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:21.1456,x:225,y:133.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:6.1779,x:203.65,y:153.05}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.567,x:208.65,y:111.55}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-29.4825,x:219.95,y:119.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:20.5943,x:238.9,y:126.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:3.433,x:223.55,y:146,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2022,x:193.5,y:78.2,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:220.75,y:106.35,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-21.7738,x:204.75,y:132.45,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:20.8933,x:220.35,y:145.35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:4.9491,x:199.05,y:165.15}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.566,x:204.35,y:123.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-27.9883,x:215.15,y:131.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:18.482,x:234.2,y:139.55,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:0.41,x:219.45,y:159.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2014,x:189.2,y:89.85,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:216.45,y:118,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-20.6898,x:200.45,y:144.2,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.1,rotation:20.6409,x:215.5,y:157.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:3.7199,x:194.3,y:177.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.566,x:200.1,y:134.8}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-26.4961,x:210.5,y:143.05,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:16.3681,x:229.45,y:151.8,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-2.6109,x:215.6,y:172.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2014,x:184.95,y:101.5,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:212.15,y:129.65,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-19.6055,x:196.2,y:155.8,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:20.3884,x:210.75,y:169.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.998,scaleY:0.998,rotation:2.4897,x:189.7,y:189.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5653,x:195.8,y:146.45}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-25.0024,x:205.75,y:154.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:14.2565,x:224.7,y:164.3,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-5.6347,x:211.4,y:185,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2014,x:180.65,y:113.15,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3922,x:207.85,y:141.3,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-18.5194,x:191.9,y:167.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:20.1368,x:205.95,y:181.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:1.2608,x:185,y:201.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5653,x:191.5,y:158.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-23.5087,x:201,y:166.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:12.1435,x:219.9,y:176.75,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9979,scaleY:0.9979,rotation:-8.6594,x:207.3,y:197.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2005,x:176.35,y:124.8,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3915,x:203.65,y:153,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-17.4353,x:187.6,y:179.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:19.8837,x:201.25,y:193.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:0.0307,x:180.25,y:213.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5644,x:187.2,y:169.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-22.0165,x:196.25,y:178.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:10.0309,x:215.05,y:189.3,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.6828,x:203.3,y:210.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2005,x:172.05,y:136.45,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3915,x:199.35,y:164.65,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-16.3501,x:183.4,y:190.95,scaleX:0.998,scaleY:0.998,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.6327,x:196.4,y:204.9,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.998,scaleY:0.998,rotation:-1.1942,x:175.65,y:225.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5644,x:182.9,y:181.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-20.5221,x:191.5,y:189.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:7.9187,x:210.15,y:201.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.7067,x:199.2,y:223.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2005,x:167.75,y:148.1,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3915,x:195.05,y:176.3,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.2646,x:179.15,y:202.5,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.3794,x:191.65,y:216.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-2.424,x:170.9,y:237.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5644,x:178.6,y:192.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-19.0299,x:186.75,y:201.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:5.8051,x:205.25,y:214.15,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-17.7309,x:195.15,y:236.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:4.2005,x:163.45,y:159.7,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3915,x:190.75,y:187.95,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.4544,x:176.6,y:202.7,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:20.5539,x:188.75,y:217.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-6.5377,x:167.7,y:237.05}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5618,x:174,y:193.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-27.4965,x:182.15,y:202.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:5.2208,x:202.3,y:212.05,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9978,scaleY:0.9978,rotation:-17.3322,x:192.5,y:234.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:2.6273,x:158.95,y:160.45,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3906,x:186.15,y:188.7,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.6445,x:174.75,y:201.95,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:21.7279,x:186.5,y:217.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-10.6515,x:165,y:236}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5598,x:169.45,y:194.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-35.964,x:177.55,y:203.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:4.6371,x:198.95,y:209.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-16.9323,x:189.25,y:232.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:1.0545,x:154.45,y:161.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3896,x:181.55,y:189.5,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.8336,x:172.65,y:199.65,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:22.9022,x:184.05,y:215.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-14.7666,x:162.3,y:233.5}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5582,x:164.85,y:195.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-44.433,x:173.05,y:203.95,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:4.053,x:195,y:207.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-16.5353,x:185.6,y:230.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-0.5123,x:149.65,y:161.85,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3896,x:177,y:190.3,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.0226,x:168.95,y:197.15,scaleX:0.998,scaleY:0.998,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:24.0764,x:179.75,y:212.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-18.8788,x:157.85,y:230.35}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5565,x:160.25,y:196.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-52.8995,x:168.4,y:204.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:3.4685,x:190.85,y:205.1,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9979,scaleY:0.9979,rotation:-16.1364,x:181.4,y:227.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-2.0857,x:145.1,y:162.55,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3886,x:172.35,y:191.15,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.2143,x:164.05,y:195.35,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:25.2505,x:174.55,y:211.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-22.993,x:152.25,y:228.35}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5546,x:155.65,y:196.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-61.3678,x:163.75,y:205.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:2.8826,x:186.05,y:202.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9978,scaleY:0.9978,rotation:-15.7373,x:177,y:225.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-3.658,x:140.65,y:163.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3877,x:167.8,y:191.95,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.4197,x:164.1,y:195.3,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:25.9742,x:175.35,y:210.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-20.8138,x:152.85,y:227.35}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5537,x:155.65,y:196.8}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-61.7336,x:163.6,y:205.45,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:5.9,rotation:4.4833,x:185.85,y:202.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.4257,x:176.25,y:225.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-4.2216,x:140.6,y:163.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3877,x:167.8,y:191.9,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-7.6285,x:164.05,y:195.1,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:26.6967,x:176.15,y:210.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-18.6355,x:153.5,y:226.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5537,x:155.65,y:196.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-62.099,x:163.75,y:205.6,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.0824,x:186,y:202.5,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-13.1144,x:175.65,y:224.85,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-4.7864,x:140.6,y:163.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.9,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.8356,x:164.05,y:195.15,scaleX:0.998,scaleY:0.998,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:27.4196,x:176.85,y:209.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-16.457,x:154.15,y:225.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5537,x:155.65,y:196.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-62.4648,x:163.55,y:205.55,regX:-5.8,regY:-6.4}},{t:this.ikNode_16,p:{regX:6,rotation:7.6836,x:185.9,y:202.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.8026,x:174.95,y:224.25,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.3509,x:140.55,y:163.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.9,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.0452,x:164,y:194.9,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:28.1426,x:177.5,y:208.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-14.2778,x:154.75,y:224}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5529,x:155.65,y:196.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-62.8316,x:163.65,y:205.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:9.2828,x:185.8,y:202.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-10.4915,x:174.4,y:223.95,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.9149,x:140.55,y:163.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-17.2525,x:163.95,y:194.75,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:28.865,x:178.3,y:207.55,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.1003,x:155.25,y:222.9}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5529,x:155.65,y:196.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-63.1969,x:163.7,y:205.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:10.8824,x:185.85,y:202,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-9.1791,x:173.75,y:223.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-6.4788,x:140.45,y:163.2,regX:17.3}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-20.4597,x:163.9,y:194.6,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:29.5883,x:178.95,y:206.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-9.9215,x:155.55,y:221.55}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5529,x:155.65,y:196.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-63.5622,x:163.55,y:205.4,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:6,rotation:12.4831,x:185.85,y:201.95,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-7.8662,x:173.2,y:222.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-7.0424,x:140.6,y:163.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.75,y:191.8,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-25.2724,x:163.85,y:194.5,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:30.6721,x:179.85,y:205.15,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-6.6522,x:156.3,y:219.65}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5529,x:155.65,y:196.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-64.1111,x:163.65,y:205.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:14.8838,x:185.8,y:201.8,scaleX:0.9982,scaleY:0.9982,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-5.9007,x:172.2,y:222.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.8586,x:140.75,y:163.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-30.0848,x:163.8,y:194.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:31.7575,x:180.7,y:203.6,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-3.3846,x:156.9,y:217.7}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5537,x:155.65,y:196.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-64.6589,x:163.55,y:205.45,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:5.9,rotation:17.285,x:185.65,y:201.45,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-3.9326,x:171.3,y:221.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-4.6739,x:140.8,y:163.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3869,x:167.8,y:191.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-34.898,x:163.75,y:194.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:32.8423,x:181.35,y:202.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-0.1165,x:157.35,y:215.7}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.5537,x:155.6,y:196.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-65.2072,x:163.65,y:205.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:19.686,x:185.8,y:201.25,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-1.9655,x:170.5,y:220.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-3.4886,x:141,y:163,regX:17.4}},{t:this.ikNode_11,p:{rotation:9.3877,x:167.8,y:191.85,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-35.2884,x:157.5,y:193.85,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:32.4506,x:175.1,y:201.55,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-0.5064,x:151.15,y:215.4}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-7.9435,x:149.3,y:196.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-65.5981,x:157.45,y:205.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:19.2946,x:179.55,y:200.8,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-2.3557,x:164.4,y:220.1,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-3.1798,x:134.4,y:162.9,regX:17.4}},{t:this.ikNode_11,p:{rotation:6.0442,x:161.6,y:191.45,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-35.6799,x:151.15,y:193.5,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:32.0592,x:168.9,y:201.1,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-0.8972,x:145.05,y:215.05}},{t:this.ikNode_10,p:{regX:-14.5,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-8.3344,x:142.95,y:196.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-65.9895,x:151.25,y:204.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:18.903,x:173.2,y:200.3,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-2.7469,x:158.3,y:219.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-2.8711,x:127.85,y:162.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:2.7007,x:155.25,y:191.1,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-36.0707,x:144.85,y:193.15,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:31.6681,x:162.6,y:200.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.998,scaleY:0.998,rotation:-1.2888,x:138.9,y:214.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:24,scaleX:0.9986,scaleY:0.9986,rotation:-8.7247,x:136.85,y:195.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-66.3807,x:145,y:204.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:18.5122,x:167,y:199.95,scaleX:0.9983,scaleY:0.9983,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-3.1373,x:152.1,y:219.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-2.5642,x:121.3,y:162.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:-0.6386,x:148.9,y:190.75,scaleX:0.9981,scaleY:0.9981,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-36.4604,x:138.5,y:192.85,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:31.2773,x:156.4,y:200.15,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-1.6788,x:132.7,y:214.5}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-9.1155,x:130.45,y:195.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-66.772,x:138.75,y:204.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:18.1195,x:160.7,y:199.3,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-3.5278,x:146,y:218.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-2.2557,x:114.75,y:162.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.9828,x:142.75,y:190.4,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-36.8531,x:132.25,y:192.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:30.8862,x:150.2,y:199.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-2.0698,x:126.5,y:214.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-9.5058,x:124.2,y:195.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-67.163,x:132.55,y:203.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:17.7284,x:154.45,y:198.8,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-3.9185,x:139.8,y:218.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-1.9481,x:108.05,y:162.2,regX:17.3}},{t:this.ikNode_11,p:{rotation:-7.3256,x:136.35,y:190.05,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-37.2435,x:125.95,y:192.1,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:30.495,x:143.95,y:199.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-2.4599,x:120.4,y:213.85}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-9.8958,x:117.9,y:194.85}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-67.5547,x:126.45,y:203.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:17.3376,x:148.05,y:198.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-4.3085,x:133.75,y:218.2,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-1.6388,x:101.5,y:162.05,regX:17.3}},{t:this.ikNode_11,p:{rotation:-10.6679,x:130,y:189.7,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-37.6335,x:119.65,y:191.8,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:30.1024,x:137.7,y:198.8,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-2.8502,x:114.3,y:213.55}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-10.2869,x:111.6,y:194.55}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-67.9465,x:120.15,y:203.15,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:16.945,x:142.05,y:197.85,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9979,scaleY:0.9979,rotation:-4.6996,x:127.45,y:217.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-1.3313,x:95.05,y:161.95,regX:17.3}},{t:this.ikNode_11,p:{rotation:-14.0114,x:123.8,y:189.35,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-38.0248,x:113.35,y:191.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:29.7123,x:131.45,y:198.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-3.2414,x:108.15,y:213.25}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-10.6772,x:105.25,y:194.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-68.3374,x:113.95,y:202.85,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:16.555,x:135.8,y:197.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9979,scaleY:0.9979,rotation:-5.09,x:121.35,y:217.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-1.0229,x:88.45,y:161.8,regX:17.3}},{t:this.ikNode_11,p:{rotation:-17.3556,x:117.45,y:189,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-38.4161,x:107.05,y:191.1,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:29.3215,x:125.15,y:197.9,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-3.6311,x:102,y:212.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-11.0685,x:99.15,y:193.9}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-68.7297,x:107.75,y:202.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:16.1628,x:129.5,y:196.85,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-5.4816,x:115.4,y:216.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-0.7146,x:81.95,y:161.65,regX:17.3}},{t:this.ikNode_11,p:{rotation:-20.6985,x:111.15,y:188.5,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-38.8074,x:100.8,y:190.85,scaleX:0.9979,scaleY:0.9979,regY:-6.7}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:28.9301,x:119.05,y:197.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-4.0219,x:95.75,y:212.6}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-11.4586,x:92.75,y:193.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-69.121,x:101.4,y:201.95,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:5.9,rotation:15.7725,x:123.1,y:196.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-5.8716,x:109.3,y:216.65,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-0.4064,x:75.45,y:161.45,regX:17.4}},{t:this.ikNode_11,p:{rotation:-24.0437,x:104.8,y:188.3,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-39.1986,x:94.45,y:190.5,scaleX:0.9979,scaleY:0.9979,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:28.5381,x:112.7,y:196.95,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-4.4129,x:89.65,y:212.35}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-11.8484,x:86.5,y:193.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-69.5114,x:95.25,y:201.7,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:15.3801,x:116.9,y:195.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-6.262,x:103.15,y:216.2,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-0.0981,x:68.95,y:161.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:-27.3862,x:98.4,y:187.85,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-39.5902,x:88.15,y:190,scaleX:0.998,scaleY:0.998,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:28.1465,x:106.4,y:196.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-4.8031,x:83.5,y:212}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-12.2396,x:80.15,y:192.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-69.9033,x:89.05,y:201.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:14.9881,x:110.75,y:195.4,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-6.6526,x:96.95,y:215.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:3.5816,x:63.2,y:161.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:-22.6441,x:91.9,y:186.9,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-39.9808,x:81.8,y:189.65,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:27.755,x:100.2,y:195.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-5.1936,x:77.35,y:211.65}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-12.6296,x:73.85,y:192.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-70.2943,x:82.85,y:200.95,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:14.5957,x:104.4,y:194.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-7.0434,x:90.85,y:215.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:7.264,x:57.3,y:161.7,regX:17.4}},{t:this.ikNode_11,p:{rotation:-17.9006,x:85.2,y:185.9,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-40.3724,x:75.45,y:189.3,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:27.3628,x:93.95,y:195.45,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-5.5844,x:71.2,y:211.3}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-13.0201,x:67.65,y:192.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-70.6872,x:76.45,y:200.5,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:6,rotation:14.204,x:98.1,y:194.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-7.4337,x:84.8,y:214.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:10.9472,x:51.5,y:161.8,regX:17.4}},{t:this.ikNode_11,p:{rotation:-13.1579,x:78.5,y:184.85,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-40.7658,x:69.25,y:188.9,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:26.9713,x:87.6,y:195,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-5.9745,x:65.05,y:211}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-13.4105,x:61.3,y:191.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-71.0781,x:70.35,y:200.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:13.8115,x:91.75,y:193.9,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-7.8237,x:78.75,y:214.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:14.6306,x:45.65,y:162,regX:17.4}},{t:this.ikNode_11,p:{rotation:-8.416,x:71.8,y:184,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-41.1564,x:62.95,y:188.5,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:26.5803,x:81.35,y:194.5,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-6.3648,x:58.8,y:210.7}},{t:this.ikNode_10,p:{regX:-14.4,regY:24,scaleX:0.9986,scaleY:0.9986,rotation:-13.8005,x:55.05,y:191.7}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-71.4701,x:64.15,y:199.75,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:13.4194,x:85.65,y:193.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-8.2147,x:72.6,y:214.05,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:18.3136,x:39.95,y:162.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.6728,x:65,y:183.1,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-41.5468,x:56.6,y:188.15,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:26.1889,x:75.15,y:194.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-6.7555,x:52.7,y:210.35}},{t:this.ikNode_10,p:{regX:-14.5,regY:24,scaleX:0.9986,scaleY:0.9986,rotation:-14.1913,x:48.75,y:191.45}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-71.8613,x:57.9,y:199.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:13.0283,x:79.35,y:192.95,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-8.6053,x:66.4,y:213.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:14.5275,x:32.9,y:161.7,regX:17.4}},{t:this.ikNode_11,p:{rotation:-9.2201,x:58.4,y:182.5,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-41.9371,x:50.3,y:187.9,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:25.7983,x:68.9,y:193.7,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-7.1464,x:46.55,y:210.1}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-14.5815,x:42.45,y:191.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-72.2513,x:51.65,y:199.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:12.6376,x:73.1,y:192.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9979,scaleY:0.9979,rotation:-8.9955,x:60.1,y:213.3,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:10.7412,x:25.85,y:161.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:-14.7682,x:51.8,y:181.9,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-42.3291,x:44.05,y:187.6,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:25.4076,x:62.65,y:193.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-7.5377,x:40.4,y:209.8}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-14.9738,x:36.2,y:190.75}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-72.6423,x:45.45,y:198.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:12.2466,x:66.7,y:191.95,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-9.3868,x:54.15,y:212.9,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:6.9559,x:18.95,y:160.75,regX:17.4}},{t:this.ikNode_11,p:{rotation:-20.3151,x:45.15,y:181.2,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-42.7185,x:37.65,y:187.25,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:25.0162,x:56.45,y:192.75,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-7.9285,x:34.3,y:209.45}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-15.3648,x:30.05,y:190.5}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-73.0346,x:39.25,y:198.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:11.856,x:60.55,y:191.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-9.777,x:48,y:212.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:3.171,x:11.95,y:160.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:-25.863,x:38.45,y:180.75,scaleX:0.998,scaleY:0.998,regX:-8.1,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-43.109,x:31.3,y:186.95,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:24.6257,x:50.1,y:192.25,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-8.3195,x:28.1,y:209.2}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-15.7565,x:23.7,y:190.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-73.4259,x:33.05,y:198.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:11.4669,x:54.15,y:191.15,scaleX:0.9982,scaleY:0.9982,regY:-10.9}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-10.1683,x:41.9,y:212.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-0.6095,x:4.85,y:159.9,regX:17.3}},{t:this.ikNode_11,p:{rotation:-31.4098,x:31.9,y:180.1,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-43.5001,x:25.1,y:186.7,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:24.2349,x:43.9,y:191.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-8.7103,x:21.95,y:208.95}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-16.148,x:17.35,y:190.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-73.8154,x:26.75,y:197.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:11.0757,x:48.1,y:190.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-10.5602,x:35.8,y:211.95,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-4.3964,x:-2.05,y:159.45,regX:17.4}},{t:this.ikNode_11,p:{rotation:-36.9557,x:25.15,y:179.6,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-43.8904,x:18.8,y:186.4,scaleX:0.9979,scaleY:0.9979,regY:-6.7}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:23.8427,x:37.55,y:191.45,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-9.1015,x:15.85,y:208.6}},{t:this.ikNode_10,p:{regX:-14.5,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-16.5384,x:10.95,y:189.8}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-74.2072,x:20.5,y:197.6,regX:-5.8,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:10.6852,x:41.85,y:190.05,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-10.95,x:29.6,y:211.5,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-4.7864,x:-8.5,y:159.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:-33.9146,x:19.25,y:179.6,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-44.282,x:12.45,y:186,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:23.4532,x:31.35,y:191,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-9.4929,x:9.7,y:208.3}},{t:this.ikNode_10,p:{regX:-14.4,regY:24,scaleX:0.9986,scaleY:0.9986,rotation:-16.9298,x:4.85,y:189.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-74.5986,x:14.35,y:197.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:10.2934,x:35.5,y:189.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.3419,x:23.55,y:211,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.1785,x:-15,y:159.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:-30.8738,x:13.35,y:179.6,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-44.6723,x:6.1,y:185.65,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:23.0623,x:25.15,y:190.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:1.9,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-9.8839,x:3.4,y:208}},{t:this.ikNode_10,p:{regX:-14.5,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-17.3202,x:-1.6,y:189.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-74.9898,x:8.15,y:196.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:9.9028,x:29.2,y:189.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-11.7328,x:17.35,y:210.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.5691,x:-21.55,y:159.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:-27.8313,x:7.4,y:179.55,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-45.0619,x:-0.25,y:185.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:22.6705,x:18.8,y:190.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-10.2745,x:-2.5,y:207.7}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-17.7107,x:-7.7,y:188.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-75.3801,x:1.85,y:196.5,regX:-5.7,regY:-6.4}},{t:this.ikNode_16,p:{regX:6,rotation:9.5119,x:22.9,y:188.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-12.1222,x:11.2,y:210.3,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-5.9599,x:-28.05,y:158.95,regX:17.4}},{t:this.ikNode_11,p:{rotation:-24.7897,x:1.4,y:179.6,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-45.4547,x:-6.55,y:185.05,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:22.2795,x:12.55,y:189.55,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-10.6648,x:-8.6,y:207.4}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-18.1022,x:-13.85,y:188.65}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-75.7712,x:-4.3,y:196.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:9.1196,x:16.7,y:188.15,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-12.5123,x:5.15,y:209.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-6.351,x:-34.65,y:158.85,regX:17.3}},{t:this.ikNode_11,p:{rotation:-21.7482,x:-4.55,y:179.6,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-45.845,x:-12.7,y:184.7,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:21.8886,x:6.4,y:189.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-11.0555,x:-14.8,y:207}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-18.4928,x:-20.3,y:188.45}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-76.1623,x:-10.4,y:195.85,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:5.9,rotation:8.7303,x:10.25,y:187.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-12.9038,x:-1,y:209.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-6.7432,x:-40.95,y:158.65,regX:17.4}},{t:this.ikNode_11,p:{rotation:-18.7061,x:-10.5,y:179.65,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-46.2359,x:-19.1,y:184.4,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:21.4979,x:0.15,y:188.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-11.4476,x:-20.9,y:206.75}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-18.884,x:-26.55,y:188.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-76.5532,x:-16.6,y:195.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:8.3381,x:4.25,y:187.2,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-13.2944,x:-7.05,y:208.95,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-7.1341,x:-47.45,y:158.6,regX:17.4}},{t:this.ikNode_11,p:{rotation:-15.6654,x:-16.5,y:179.65,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-46.627,x:-25.45,y:184.1,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:21.1071,x:-6.15,y:188.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-11.8376,x:-27.05,y:206.55}},{t:this.ikNode_10,p:{regX:-14.4,regY:24,scaleX:0.9986,scaleY:0.9986,rotation:-19.2736,x:-32.75,y:187.95}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-76.9445,x:-23.05,y:195.25,regX:-5.8,regY:-6.4}},{t:this.ikNode_16,p:{regX:6,rotation:7.9461,x:-2.1,y:186.75,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.7,scaleX:0.9979,scaleY:0.9979,rotation:-13.6854,x:-13.05,y:208.65,regY:-1.5}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-7.5244,x:-54,y:158.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:-12.6231,x:-22.5,y:179.75,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.0168,x:-31.7,y:183.75,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:7,regY:-11.2,rotation:20.7158,x:-12.3,y:187.8,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1,scaleX:0.9979,scaleY:0.9979,rotation:-12.2283,x:-33.15,y:206.3}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-19.666,x:-39.1,y:187.6}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-77.3346,x:-29.15,y:194.8,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:7.5555,x:-8.35,y:186.25,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.5,scaleX:0.9978,scaleY:0.9978,rotation:-14.0753,x:-19.5,y:208.15,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-7.9158,x:-60.5,y:158.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:-9.5823,x:-28.5,y:179.85,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.408,x:-38.05,y:183.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:20.3238,x:-18.65,y:187.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-12.6176,x:-39.35,y:205.9}},{t:this.ikNode_10,p:{regX:-14.4,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.0559,x:-45.35,y:187.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-77.7267,x:-35.3,y:194.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:7.1661,x:-14.65,y:185.75,scaleX:0.9982,scaleY:0.9982,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.4676,x:-25.5,y:207.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.306,x:-67,y:158.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:-6.5402,x:-34.55,y:179.85,scaleX:0.9981,scaleY:0.9981,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-44.4,y:183.1,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9342,x:-24.95,y:186.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0093,x:-45.55,y:205.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.447,x:-51.6,y:187.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1178,x:-41.55,y:194.1,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7743,x:-20.95,y:185.3,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.8588,x:-31.65,y:207.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6984,x:-73.5,y:158.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4991,x:-40.65,y:179.9,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-44.7,y:183.15,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-25.25,y:186.85,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0093,x:-45.85,y:205.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4462,x:-51.9,y:187.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1178,x:-41.85,y:194.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7743,x:-21.25,y:185.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.8588,x:-31.95,y:207.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6984,x:-73.8,y:158.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4991,x:-40.95,y:179.95,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-45,y:183.15,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-25.55,y:186.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0093,x:-46.15,y:205.6}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4462,x:-52.2,y:187.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1178,x:-42.15,y:194.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7734,x:-21.55,y:185.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.858,x:-32.25,y:207.35,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6975,x:-74.1,y:158.1,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4982,x:-41.2,y:179.95,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-45.3,y:183.15,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-25.85,y:186.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0093,x:-46.45,y:205.65}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4462,x:-52.5,y:187.05}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1178,x:-42.45,y:194.15,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7734,x:-21.85,y:185.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.858,x:-32.55,y:207.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6974,x:-74.4,y:158.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4982,x:-41.5,y:180,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-45.6,y:183.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-26.15,y:186.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0084,x:-46.75,y:205.65}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4462,x:-52.8,y:187.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-42.75,y:194.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7734,x:-22.15,y:185.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.858,x:-32.85,y:207.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6974,x:-74.7,y:158.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4982,x:-41.8,y:180,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-45.9,y:183.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-26.45,y:186.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0084,x:-47,y:205.65}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4462,x:-53.1,y:187.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-43.05,y:194.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7725,x:-22.45,y:185.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.858,x:-33.1,y:207.4,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6974,x:-75,y:158.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4982,x:-42.1,y:180.05,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-46.2,y:183.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-26.75,y:186.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0084,x:-47.3,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4454,x:-53.4,y:187.1}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-43.35,y:194.2,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7725,x:-22.75,y:185.35,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.858,x:-33.4,y:207.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6965,x:-75.3,y:158.15,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4973,x:-42.4,y:180.05,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.7999,x:-46.5,y:183.2,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-27.05,y:186.95,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0084,x:-47.6,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4454,x:-53.7,y:187.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-43.65,y:194.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7725,x:-23.05,y:185.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8571,x:-33.7,y:207.45,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6965,x:-75.6,y:158.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4973,x:-42.7,y:180.1,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8005,x:-46.8,y:183.25,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-27.35,y:187,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0084,x:-47.9,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4454,x:-54,y:187.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-43.95,y:194.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7725,x:-23.35,y:185.4,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8571,x:-34,y:207.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6965,x:-75.9,y:158.2,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4973,x:-43,y:180.1,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8005,x:-47.1,y:183.25,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-27.65,y:187,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0078,x:-48.2,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4454,x:-54.3,y:187.15}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-44.25,y:194.25,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7716,x:-23.6,y:185.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8571,x:-34.3,y:207.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6965,x:-76.2,y:158.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4973,x:-43.3,y:180.1,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8005,x:-47.4,y:183.25,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.933,x:-27.95,y:187,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0078,x:-48.5,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4459,x:-54.6,y:187.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1189,x:-44.55,y:194.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7716,x:-23.9,y:185.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8571,x:-34.6,y:207.5,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6956,x:-76.5,y:158.25,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4964,x:-43.6,y:180.15,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8005,x:-47.7,y:183.25,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-28.25,y:187.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0078,x:-48.8,y:205.7}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4459,x:-54.9,y:187.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-44.85,y:194.3,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7716,x:-24.15,y:185.45,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8563,x:-34.9,y:207.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6956,x:-76.8,y:158.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4964,x:-43.9,y:180.15,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-48,y:183.3,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-28.55,y:187.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0076,x:-49.1,y:205.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-55.2,y:187.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-45.15,y:194.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7716,x:-24.45,y:185.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8563,x:-35.2,y:207.55,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6956,x:-77.05,y:158.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4964,x:-44.2,y:180.2,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-48.3,y:183.3,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-28.85,y:187.05,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0076,x:-49.4,y:205.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-55.5,y:187.2}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-45.45,y:194.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7708,x:-24.75,y:185.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8563,x:-35.5,y:207.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6956,x:-77.35,y:158.3,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4964,x:-44.5,y:180.2,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-48.6,y:183.3,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-29.15,y:187.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0067,x:-49.7,y:205.75}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-55.8,y:187.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-45.75,y:194.35,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7708,x:-25.05,y:185.5,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8563,x:-35.8,y:207.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6948,x:-77.65,y:158.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4956,x:-44.8,y:180.25,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-48.9,y:183.3,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-29.45,y:187.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0067,x:-50,y:205.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-56.1,y:187.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-46.05,y:194.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7708,x:-25.35,y:185.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9979,scaleY:0.9979,rotation:-14.8552,x:-36.1,y:207.6,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6948,x:-77.95,y:158.35,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4956,x:-45.1,y:180.25,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-49.2,y:183.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-29.75,y:187.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0067,x:-50.3,y:205.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-56.4,y:187.25}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1197,x:-46.35,y:194.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7708,x:-25.65,y:185.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8544,x:-36.4,y:207.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6948,x:-78.25,y:158.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4956,x:-45.4,y:180.25,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-49.5,y:183.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-30.05,y:187.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0067,x:-50.6,y:205.8}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4448,x:-56.7,y:187.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-46.65,y:194.4,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7699,x:-25.95,y:185.55,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8544,x:-36.7,y:207.7,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6939,x:-78.55,y:158.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4956,x:-45.7,y:180.3,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-49.8,y:183.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-30.35,y:187.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0067,x:-50.9,y:205.85}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4439,x:-57,y:187.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-46.95,y:194.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7699,x:-26.25,y:185.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8544,x:-37,y:207.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6939,x:-78.85,y:158.4,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4947,x:-46,y:180.3,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-50.1,y:183.35,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-30.65,y:187.15,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0065,x:-51.2,y:205.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4439,x:-57.3,y:187.3}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-47.25,y:194.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.7699,x:-26.55,y:185.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8544,x:-37.3,y:207.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6939,x:-79.15,y:158.45,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4947,x:-46.3,y:180.35,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-50.4,y:183.4,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-30.95,y:187.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0065,x:-51.5,y:205.9}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4439,x:-57.6,y:187.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-47.55,y:194.45,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.769,x:-26.85,y:185.6,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8535,x:-37.6,y:207.75,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6939,x:-79.45,y:158.45,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4947,x:-46.6,y:180.35,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8012,x:-50.7,y:183.4,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-31.25,y:187.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0065,x:-51.8,y:205.95}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4439,x:-57.9,y:187.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-47.85,y:194.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.769,x:-27.15,y:185.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8535,x:-37.9,y:207.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6929,x:-79.75,y:158.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4947,x:-46.9,y:180.4,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8017,x:-51,y:183.4,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9322,x:-31.55,y:187.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0065,x:-52.1,y:205.95}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4439,x:-58.2,y:187.35}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-48.15,y:194.5,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.769,x:-27.45,y:185.65,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8535,x:-38.2,y:207.8,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6929,x:-80.05,y:158.5,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4938,x:-47.2,y:180.4,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-47.8017,x:-51.3,y:183.45,scaleX:0.9979,scaleY:0.9979,regY:-6.8}},{t:this.ikNode_13,p:{regX:6.9,regY:-11.2,rotation:19.9317,x:-31.9,y:187.25,scaleX:0.9979,scaleY:0.9979}},{t:this.ikNode_14,p:{regX:2,regY:-1.1,scaleX:0.9979,scaleY:0.9979,rotation:-13.0065,x:-52.4,y:206}},{t:this.ikNode_10,p:{regX:-14.3,regY:23.9,scaleX:0.9986,scaleY:0.9986,rotation:-20.4426,x:-58.55,y:187.4}},{t:this.ikNode_15,p:{scaleX:0.9987,scaleY:0.9987,rotation:-78.1206,x:-48.5,y:194.55,regX:-5.7,regY:-6.3}},{t:this.ikNode_16,p:{regX:6,rotation:6.769,x:-27.75,y:185.7,scaleX:0.9983,scaleY:0.9983,regY:-11}},{t:this.ikNode_17,p:{regX:5.6,scaleX:0.9978,scaleY:0.9978,rotation:-14.8535,x:-38.5,y:207.85,regY:-1.6}},{t:this.ikNode_18,p:{scaleX:0.9983,scaleY:0.9983,rotation:-8.6929,x:-80.35,y:158.55,regX:17.4}},{t:this.ikNode_11,p:{rotation:-3.4938,x:-47.5,y:180.45,scaleX:0.998,scaleY:0.998,regX:-8,regY:1.2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Tiki_Hut_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B68266").s().p("ABWjAIAMgEIgRBBIAWgPIiJEAIB2kOIi6Fmg");
	this.shape.setTransform(-63.65,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECB63B").s().p("AADgOIAGAOIgRAPg");
	this.shape_1.setTransform(32.575,9.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECB63B").s().p("AgFgOIAHgKIAEAIIgDApg");
	this.shape_2.setTransform(30.825,7.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECB63B").s().p("AALARQgDgEgKgKIgKgIIAHgMIASAjg");
	this.shape_3.setTransform(29.625,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECB63B").s().p("AgLABIACgMIAWAXg");
	this.shape_4.setTransform(28.95,10.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECB63B").s().p("AgWgHIAtAFIgXAKg");
	this.shape_5.setTransform(31,22.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DF8E44").s().p("AgWADIAGgEQAJgFAJAAIAVANg");
	this.shape_6.setTransform(31,21.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF8E44").s().p("AgQAVIgBgGIASgmIARAoIgCAHg");
	this.shape_7.setTransform(31.325,17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A55B59").s().p("AgKAGQgFgDAAgDQAAgDAFgCQAEgCAGAAQAHAAAEACQAFACAAADQAAADgFADQgEACgHAAQgFAAgFgCg");
	this.shape_8.setTransform(33.575,14.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DF8E44").s().p("AgPAIQgHgDAAgFQAAgEAHgDQAHgDAIAAQAKAAAGADQAHADAAAEQAAAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_9.setTransform(33.575,14.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A55B59").s().p("AgNAAQAAgCAEgCQAEgCAFAAQAGAAAEACQAEACAAACQAAAHgOAAQgNAAAAgHg");
	this.shape_10.setTransform(28.725,14.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DF8E44").s().p("AgPAIQgHgDAAgFQAAgEAHgDQAHgDAIAAQAKAAAGADQAHADAAAEQAAAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_11.setTransform(28.725,14.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A55B59").s().p("AgsAAQAAg1Asg0QAtA1AAA0QAAA1gtA1Qgsg0AAg2g");
	this.shape_12.setTransform(31.175,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#725F43").s().p("AgBBPQgZgpgBgmQABgmAZgoQALgUANgNIAEAGQgrA0gBA1QABA2ArA0IgEAFQgNgMgLgUg");
	this.shape_13.setTransform(28.4,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#725F43").ss(2.6,1,1).p("AATACIgmgD");
	this.shape_14.setTransform(-3.4,58.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B18D7C").ss(2.6,1,1).p("AgxAIIBjgP");
	this.shape_15.setTransform(31.225,39.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B18D7C").ss(2.6,1,1).p("AhKAJICVgS");
	this.shape_16.setTransform(31.425,42.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#997F6D").ss(2.6,1,1).p("AgmghIBNBD");
	this.shape_17.setTransform(42.075,38.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#725F43").ss(2.6,1,1).p("AgzgqIBnBV");
	this.shape_18.setTransform(40.775,41.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#997F6D").ss(2.6,1,1).p("AghAvIBChd");
	this.shape_19.setTransform(18.35,44.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#65402D").s().p("AAEAeIgIgpIgBgqIADArIAIApIgEAYg");
	this.shape_20.setTransform(-40.8,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#65402D").s().p("AgDAKIAFgKIAAgMIgDgLIAFALIgBAMIgEAJIAAAPg");
	this.shape_21.setTransform(-45.35,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#65402D").s().p("AABgiIADApIgHAbg");
	this.shape_22.setTransform(-32.125,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#65402D").s().p("AgChGIAFACIAACLg");
	this.shape_23.setTransform(-33.825,-22.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#65402D").s().p("AAAAyIgBhkIADBlg");
	this.shape_24.setTransform(-44.1,66.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#65402D").s().p("AAAgcIABA3IgBACg");
	this.shape_25.setTransform(-27.025,69.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#65402D").s().p("AAAA1IAAhrIABBtg");
	this.shape_26.setTransform(-33.975,67.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#65402D").s().p("AAAAtIgBhaIADBbg");
	this.shape_27.setTransform(-31.4875,68.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#65402D").s().p("AAAgNIABAaIgBABg");
	this.shape_28.setTransform(-31.875,52.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#65402D").s().p("AAAgEIABgOIgBAlg");
	this.shape_29.setTransform(-33.25,51.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#65402D").s().p("AAAgIIgCgDIACgVIAAAWIADABIAAAqg");
	this.shape_30.setTransform(-40.35,56.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#65402D").s().p("AgHgCIAPgMIgNANIgCAQg");
	this.shape_31.setTransform(-41.175,39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#65402D").s().p("AAAADIgBhFIABBAQADBAgCAFIAAAAQgBAAAAhAg");
	this.shape_32.setTransform(-28.5969,-10.6111);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#65402D").s().p("AABAdQgBgFgBg0IACAeQABAbgBAAIAAAAg");
	this.shape_33.setTransform(-30.0679,-23.3114);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#65402D").s().p("AgBAQIACgoIAAAnIABAKg");
	this.shape_34.setTransform(-39.15,29.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#65402D").s().p("AAAgOQACAHgBALIgBALg");
	this.shape_35.setTransform(-31.6833,8.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#65402D").s().p("AAAgMQACACgBAMIAAAMQgCgHABgTg");
	this.shape_36.setTransform(-34.8006,5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#65402D").s().p("AAAgVIABASQABASgCAHg");
	this.shape_37.setTransform(-35.2375,-0.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#65402D").s().p("AgCAJIgBgtIAHBJg");
	this.shape_38.setTransform(-44.975,-1.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#65402D").s().p("AgBgnIACAlQACAlgCAGg");
	this.shape_39.setTransform(-43.3179,33.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#65402D").s().p("AABAsQgBgFgBhTQABALABAoQABAmgBAAIAAgBg");
	this.shape_40.setTransform(-43.7625,22.922);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#65402D").s().p("AgGhrQAEARAEBkIAFBhg");
	this.shape_41.setTransform(-45.75,25.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#955B3B").s().p("AABAgIAAgNIgBgHIgCgqIAFA+g");
	this.shape_42.setTransform(-47.15,-4.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#563426").s().p("AABAoIgBgIIgBhGIgBgHIABgJIgCgZIACgEIAAAEIACAYIgBAHIABAHIAAAIIABALIAAAMIgBAsIADAXIAAAbg");
	this.shape_43.setTransform(-47.925,-18.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#894C31").s().p("AAAAtIAAgDIAAgEIAAgDIAAgJIAAgCIAAgGIABgFIgDgQIABgGIABgCIgCgHIABgDIgBgEIAAgEIAAgEIAAgDIABgEIgBgFIAAgGIABgEIAAAFIABAJIgBAHIABAEIAAAEIAAAEIAAAHIAAAOIAAADIABAFIACAGIgCATIAAAEIABAEIABAHIgBAFIAAAEg");
	this.shape_44.setTransform(-43.125,66.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#894C31").s().p("AAEA+IgCgHIgBgEIABgIIgCgFIgBgSIAAgRIgBgKIgCgHIAEgYIgBgKIgBgDIACgLIgBgGIABAJIAAAGIAAADIAAAJIAAAEIAAAQIgCAGIACATIAAAEIAAAEIAAADIAAAGIABABIAAAFIABAJIACAKIgBAEIABAGIABAMg");
	this.shape_45.setTransform(-39.075,-22.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#955B3B").s().p("AACA4IgDh2IABAAIACB9g");
	this.shape_46.setTransform(-42.7125,-22.9375);

	this.instance = new lib.Path_5();
	this.instance.setTransform(-45.5,-25,1,1,0,0,0,0.3,3.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#67462F").s().p("AAFAoQgogDgJhMQAHAUAPATQAcAjAngIIgMAHQgNAGgLAAIgEAAg");
	this.shape_47.setTransform(-31.2,17.1317);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AB8059").s().p("AguAiIABgDQAMAFARgIQAhgQAeg7IgXA9QgSAigWAAQgOAAgQgOg");
	this.shape_48.setTransform(-43.2,17.1674);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#70403F").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_49.setTransform(-42.875,-16.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC906C").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_50.setTransform(-43.725,-17.5848);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#70403F").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_51.setTransform(-42.875,-12.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC906C").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_52.setTransform(-43.725,-13.8848);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#70403F").s().p("AgngZQAjAEAqAeIACARQgJgahGgZg");
	this.shape_53.setTransform(-42.875,-9.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC906C").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgrgeghgEg");
	this.shape_54.setTransform(-43.725,-10.1395);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#70403F").s().p("AgngZQAjAFAqAdIACARQgJgahGgZg");
	this.shape_55.setTransform(-42.875,-5.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CC906C").s().p("AgegOIgPgFQAYgCAjATIAgASIAAAEQgqgdgigFg");
	this.shape_56.setTransform(-43.725,-6.4348);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#70403F").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_57.setTransform(-32.425,-16.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BD7147").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_58.setTransform(-31.6,-17.5848);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#70403F").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_59.setTransform(-32.425,-12.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BD7147").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_60.setTransform(-31.6,-13.8848);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#70403F").s().p("AglAJQAqgeAjgEQhGAZgJAag");
	this.shape_61.setTransform(-32.425,-9.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BD7147").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgiAEgrAeg");
	this.shape_62.setTransform(-31.6,-10.1395);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#70403F").s().p("AglAJQAqgdAjgFQhGAZgJAag");
	this.shape_63.setTransform(-32.425,-5.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BD7147").s().p("AgtAQQAOgKASgIQAjgTAYACIgOAFQgjAFgqAdg");
	this.shape_64.setTransform(-31.6,-6.4348);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#67462F").s().p("AghgVIABAAIBCAEIg5Amg");
	this.shape_65.setTransform(-33.475,32.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#955B3B").s().p("AgjgNIA9gIIAKAqIgBABg");
	this.shape_66.setTransform(-39.425,32.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C37D55").s().p("AgdBkIgHjLIAkC2IAlAXIgDACg");
	this.shape_67.setTransform(-33.475,20.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C88863").s().p("AghBrIAcgcIAfi7IABAGIAHDLIgDAAIg9AIg");
	this.shape_68.setTransform(-39.875,20.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AB8059").s().p("AgIANQgDgFAAgIQAAgHADgFQAEgGAEAAQAFAAAEAGQADAFAAAHQAAAIgDAFQgEAGgFAAQgEAAgEgGg");
	this.shape_69.setTransform(-31.075,9.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7A534F").s().p("AgIAOQgEgFgBgJQABgIAEgFQADgHAFAAQAGAAADAHQAEAFAAAIQAAAJgEAFQgDAHgGAAQgFAAgDgHg");
	this.shape_70.setTransform(-31.1,9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#49382F").s().p("AgiADQASgPARgJQAkgQgCAmIgNAVQgGAEgHAAQgRAAgagXg");
	this.shape_71.setTransform(-31.7197,8.8132);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D6D51").s().p("Ag0ADQAoggASgHQArgQAFA3IgFAMQgGANgKAHQgJAGgLAAQgaAAgngmg");
	this.shape_72.setTransform(-31.3,8.7714);

	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(-31.25,9,1,1,0,0,0,5.4,3.9);
	this.instance_1.alpha = 0.7188;

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(-31.6,11.35,1,1,0,0,0,5.8,2.8);
	this.instance_2.alpha = 0.6719;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AE856B").s().p("AALgKQgZAIgjAcIgHgHQAegZAcgNQA6gZgDBGQgCgxgsANg");
	this.shape_73.setTransform(-31.6426,6.4745);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D7BDA2").s().p("AgIANQgDgFAAgIQAAgHADgFQAEgGAEAAQAFAAAEAGQADAFAAAHQAAAIgDAFQgEAGgFAAQgEAAgEgGg");
	this.shape_74.setTransform(-43.675,9.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A8837E").s().p("AgIAOQgEgFgBgJQABgIAEgFQADgGAFgBQAGABADAGQAEAFAAAIQAAAJgEAFQgDAHgGAAQgFAAgDgHg");
	this.shape_75.setTransform(-43.7,9.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#65402D").s().p("AgVAWQgKgHgDgOQgCgmAkAQIAjAYQgaAXgRAAQgHAAgGgEg");
	this.shape_76.setTransform(-43.0303,8.9132);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C88863").s().p("AgfAjQgQgLgEgVQAEg3AqAQQASAHAnAgQgmAmgaAAQgLAAgIgGg");
	this.shape_77.setTransform(-43.325,8.8714);

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(-43.25,9.1,1,1,0,0,0,5.3,3.9);
	this.instance_3.alpha = 0.7188;

	this.instance_4 = new lib.Path_1();
	this.instance_4.setTransform(-42.9,11.45,1,1,0,0,0,5.7,2.8);
	this.instance_4.alpha = 0.6719;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D39F7F").s().p("AgBgTQARAIAWAPIASAPIgHAHQgigcgYgIQgrgNgCAxQgDhGA4AZg");
	this.shape_78.setTransform(-43.0076,6.5745);

	this.instance_5 = new lib.Path_0();
	this.instance_5.setTransform(-35.7,54.35,1,1,0,0,0,9.5,3);
	this.instance_5.alpha = 0.6719;

	this.instance_6 = new lib.Path();
	this.instance_6.setTransform(-36.5,38.95,1,1,0,0,0,9.1,1.7);
	this.instance_6.alpha = 0.7188;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#937059").s().p("AgGgEIAPgEIABALQgJAEgKACg");
	this.shape_79.setTransform(-33.45,50.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#937059").s().p("AgNgCIACgIIAVAKIAEALQgOgGgNgHg");
	this.shape_80.setTransform(-42.7,49.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#937059").s().p("AgQACIADgJQANAEANAAIAEALQgPAAgSgGg");
	this.shape_81.setTransform(-39.325,50.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#937059").s().p("AgKgFIATgBIAEALQgLACgOAAg");
	this.shape_82.setTransform(-36.075,51.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#937059").s().p("AgLAAQALgEAQgLIACAKQgSANgRAIg");
	this.shape_83.setTransform(-30.2,49.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#937059").s().p("AgEgEIAJgCIgDANIgDAAg");
	this.shape_84.setTransform(-34.65,50.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#937059").s().p("AgXAQQAcgSASgXQABAAAAAAQAAABAAAAQgBABAAAAQAAABgBABIgBAFIgLAOQgNAPgRANg");
	this.shape_85.setTransform(-26.2833,45.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#937059").s().p("AAAAGIgDgLIAHAAIgCALg");
	this.shape_86.setTransform(-37.575,51.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#937059").s().p("AgSgKQgFgFACgDQAWATAVALIgCAIQgTgNgTgRg");
	this.shape_87.setTransform(-46.1286,47.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#937059").s().p("AAAAFIgEgKIAIACIgCAJg");
	this.shape_88.setTransform(-41.2,50.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#937059").s().p("AgFgDIALgFIgGAQIgDABg");
	this.shape_89.setTransform(-32,50.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EDDCBE").s().p("AAFgWIAJAdQgPALgMAEg");
	this.shape_90.setTransform(-30.025,46.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EDDCBE").s().p("AACgVIAGAnIgPAFg");
	this.shape_91.setTransform(-33.375,47.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EDDCBE").s().p("AgKANIAIgjIANAtIgVgKg");
	this.shape_92.setTransform(-42.775,47.425);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EDDCBE").s().p("AgNAXIAMgyIAPA3QgNgBgOgEg");
	this.shape_93.setTransform(-39.375,47.675);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EDDCBE").s().p("AgBgXIALAuIgTABg");
	this.shape_94.setTransform(-36.15,48.025);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AAGgYIAHAgQgNALgNAGg");
	this.shape_95.setTransform(-29.75,46.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AACgYIAGAsIgPAFg");
	this.shape_96.setTransform(-33.1,47.875);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgLAPIAJgoIAOAzQgMgFgLgGg");
	this.shape_97.setTransform(-42.5,47.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgNAaIAMg4IAPA9QgLAAgQgFg");
	this.shape_98.setTransform(-39.125,47.675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgCgaIAMAzQgIACgLAAg");
	this.shape_99.setTransform(-35.875,48.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgRAFQAPgMATgCIgDAJQgOABgMAJg");
	this.shape_100.setTransform(-44.65,42.775);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgMAFQAMgLAMgFIgCAKQgKAEgJAJg");
	this.shape_101.setTransform(-34.45,42.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgLADIgCgIQANgBAOAFIgDAHQgLgDgLAAg");
	this.shape_102.setTransform(-41.2,42.3167);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgJAAIgCgJQALAFAMAHIgCAHQgLgHgIgDg");
	this.shape_103.setTransform(-38,43.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgMABIgBgIQANACAOAGIgEAHQgMgFgKgCg");
	this.shape_104.setTransform(-27.3,42.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgSgBQARgHAUADIgEAIQgRgCgPAFg");
	this.shape_105.setTransform(-30.875,41.7526);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AAAgDIACgBIACAIIgHABg");
	this.shape_106.setTransform(-42.8,42.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgKAAIADgHQAJAEAJAFIgEAGg");
	this.shape_107.setTransform(-25.15,42.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgFACIADgHIAFACIACAJg");
	this.shape_108.setTransform(-39.5,42.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgBgDIAEgCIABAIIgHADg");
	this.shape_109.setTransform(-33.05,42.125);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgDADIADgHIADAAIABAJg");
	this.shape_110.setTransform(-29,41.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgGACIABgGIAFADIAFgFIADAGIgIAHg");
	this.shape_111.setTransform(-36.25,44.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgLAKQAHgMAMgKIAEAFQgKAHgJANg");
	this.shape_112.setTransform(-47.175,44.575);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EDDCBE").s().p("AgNgGQANgJAOgCIgLAjg");
	this.shape_113.setTransform(-44.6,44.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EDDCBE").s().p("AgPgTQAPgFAQABIgYAvg");
	this.shape_114.setTransform(-31.025,44.4077);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EDDCBE").s().p("AgJgUQAIADALAHIgJAfg");
	this.shape_115.setTransform(-37.975,45.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EDDCBE").s().p("AgLgUQALAAAMADIgMAmg");
	this.shape_116.setTransform(-41.225,44.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EDDCBE").s().p("AgLgTQALABAMAGIgRAgg");
	this.shape_117.setTransform(-27.45,44.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EDDCBE").s().p("AgJgJQAJgJAKgEIgKAtg");
	this.shape_118.setTransform(-34.475,45.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgPAAIAPgNQAKgJAGgBIgPAvg");
	this.shape_119.setTransform(-44.15,44.625);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AgRgPIARgHQALgGAHABIgbA4g");
	this.shape_120.setTransform(-30.575,44.6979);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgKgUQAIADAFAAQAFgBADACIgLAlg");
	this.shape_121.setTransform(-37.625,46.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgNgRIANgEQAIgEAFACIgPAvg");
	this.shape_122.setTransform(-40.75,45.1025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgNgSIANgBQAJgDAFADIgWAog");
	this.shape_123.setTransform(-26.9,44.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgKgDIAKgNQAGgJAFgDIgMA5g");
	this.shape_124.setTransform(-34.125,45.225);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#49382F").s().p("Ah1gEQAPgWAWgIQAkgMAsAfQAKgOAUgIQAngRAxAdQgkArguARQgXAJgWAAQg2AAg2gwg");
	this.shape_125.setTransform(-36.225,46.4098);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9A5E3D").s().p("AghAAIgUghQAwgCA4AfIADAnQgigUg1gPg");
	this.shape_126.setTransform(-42.825,2.294);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#67462F").s().p("Ag0AmIgDgnIADABQADgIAPgLQAfgTA7gBIgBACQAAAKgPAKQhDARgXAog");
	this.shape_127.setTransform(-32.125,1.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#807864").s().p("AhOFuQgRiBAgj9QAGgvgEhNQgDhMgKg7QgDgOgBgUIACACQAXgoBDgSQgFADgFACIAXAcQAMAQADAMQADALgMCbIgMCXQAQAGAQAJQAgATAAATQAAATgaAgQgNARgOAMQAKAdAGBRQAHBQgGAKQgGAIgwAHQglAFgYAAIgMAAg");
	this.shape_128.setTransform(-29.5093,36.765);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D7BDA2").s().p("AACFeQgKgEgLgJQgLgJAHizQgOgLgOgOQgcgdABgRQABgRAZgUIAZgRQgjkJgBgmQgBgXAPgcIAPgXIgDgEQAqAMAwAcQACAUACAPQAMBEAGBEQAHBSgGAsIgUCiQgNCHALBRQgigCgSgGg");
	this.shape_129.setTransform(-42.7808,37.525);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A36D4D").s().p("Ag4CdQgGhxAAjKQAoAAAiALQAkALANASQAFBAgLCsQg7ABgfAUQgPAKgDAKg");
	this.shape_130.setTransform(-32.0242,-13.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C88761").s().p("AgtCAIgNjTQgBglAjgUQAdgRAwAAQAADKAGBxQg5gggvACg");
	this.shape_131.setTransform(-43.6254,-13.975);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B68266").s().p("AguBfIgUAdIgOgfIjCgsIgRAMIgJgOIgbAaIAAgkIgsAxIARgxIg6A/IAMg/IgWAWIgEgPIgZAlIAZhJIFXBJIIXkCIhVCUIAsh+IgxA/IAGgeIgJgCIkbC2IgWAxIgXgiIgfAsIABgfIg+Bcg");
	this.shape_132.setTransform(-11.8,-14.725);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7B3C26").s().p("AiKF5QiqgNiGgTQiNgUgLgPQgCgJB1j+QB1j8gDgLQAMALCxApQCyApgGgPQACAFEBiAQEJiDAVACQAMACAqA8QgYAbgcAjIgBAAQAAgEggA+QglBJgkBSQhtD5gbCnQgEAciWAAQhqAAizgOg");
	this.shape_133.setTransform(-18.4759,5.4584);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#725F43").s().p("AiFAHIDog+IAAAKIAyAiIkpBDg");
	this.shape_134.setTransform(43.775,-15.475);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B18D7C").s().p("Ah4ALIEAhEIglAfIgCAVIjoA+g");
	this.shape_135.setTransform(43.975,-20.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E5C0A0").s().p("AgjAOIACgeIAkgfIACAAIAfAcIgQBCIgGABg");
	this.shape_136.setTransform(57.25,-21.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7B3C26").s().p("AiFj3QAdgjAYgbQBOBvBRDwQBVD8gwAQQhFi6i0lzg");
	this.shape_137.setTransform(49.1527,3.625);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#725F43").ss(2.6,1,1).p("AhKhNICVCb");
	this.shape_138.setTransform(-54.275,54.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#997F6D").ss(2.6,1,1).p("AgigHIBFAP");
	this.shape_139.setTransform(-58.125,53.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#725F43").ss(2.6,1,1).p("AgrgGIBWAN");
	this.shape_140.setTransform(-57.3,56.875);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#997F6D").ss(2.6,1,1).p("AgygHIBlAP");
	this.shape_141.setTransform(-55.775,60.55);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#725F43").ss(2.6,1,1).p("AhPhXICgCv");
	this.shape_142.setTransform(-53.15,48.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#997F6D").ss(2.6,1,1).p("AhVhcICrC5");
	this.shape_143.setTransform(-53,51.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#725F43").ss(2.6,1,1).p("AAChoIgDDQ");
	this.shape_144.setTransform(-62.775,49.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#997F6D").ss(2.6,1,1).p("AgHhnIAPDP");
	this.shape_145.setTransform(-65.125,49.275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#725F43").ss(2.6,1,1).p("AgIhjIARDH");
	this.shape_146.setTransform(-67.375,49.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#997F6D").ss(2.6,1,1).p("AgsAAIBZAA");
	this.shape_147.setTransform(-5.425,61.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#725F43").ss(2.6,1,1).p("Ag8AAIB5AB");
	this.shape_148.setTransform(-7.175,64.325);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#997F6D").ss(2.6,1,1).p("AhNgEICbAJ");
	this.shape_149.setTransform(-8.7,67.175);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#725F43").ss(2.6,1,1).p("ABfhBIi9CD");
	this.shape_150.setTransform(-10.725,59.525);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#B18D7C").ss(2.6,1,1).p("ABuhPIjbCf");
	this.shape_151.setTransform(-12.55,57.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#997F6D").ss(2.6,1,1).p("Ah9BbID7i1");
	this.shape_152.setTransform(-14.325,56.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#725F43").ss(2.6,1,1).p("ACJhmIkRDN");
	this.shape_153.setTransform(-16.025,54.15);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#725F43").ss(2.6,1,1).p("AAKB0IgTjn");
	this.shape_154.setTransform(-0.15,55.525);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#997F6D").ss(2.6,1,1).p("AAHB2IgNjr");
	this.shape_155.setTransform(3.025,55.725);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#725F43").ss(2.6,1,1).p("AAIByIgPjj");
	this.shape_156.setTransform(6,55.725);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CA7E43").s().p("AADB6Qk7gzgqgDQAThEgYhSIgdhFIL9AdIgKBHQgEBcAaBtQgeACggAAQiIAAi8geg");
	this.shape_157.setTransform(-30.95,52.4621);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#997F6D").s().p("Ag1hpIBcgiIAPEMIhZALg");
	this.shape_158.setTransform(10.325,53.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B18D7C").s().p("AjDAEIFpg/IAdATQAWAVggAQImEA/g");
	this.shape_159.setTransform(27.5352,30.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#A27C61").s().p("AjEAEIFqg/IAdATQAWAVghAQImDA/g");
	this.shape_160.setTransform(32.0061,34.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A55B59").s().p("AAzFDIjToeIA4hpQBJCWBECcQCLE2gQAhg");
	this.shape_161.setTransform(45.3375,2.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#DF8E44").s().p("AAgkuIC3IbImtBCg");
	this.shape_162.setTransform(30.075,5.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B18D7C").s().p("AgmCDIgIj6IBKgSIATEIIg/ALg");
	this.shape_163.setTransform(48.775,47.325);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#725F43").ss(2.6,1,1).p("Ag5BNIBziZ");
	this.shape_164.setTransform(20.775,45.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#725F43").s().p("Ag6AEIgPgdICTAUIgGAfg");
	this.shape_165.setTransform(-62.4,-9.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B18D7C").s().p("AhMgBIAAgBIAigOIB2ALIgEAWg");
	this.shape_166.setTransform(-62.15,-11.475);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#544734").s().p("AiphoIFIgsIALENIlPAcg");
	this.shape_167.setTransform(30.125,47.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C6907F").s().p("AgJAUQgFgIAAgMQAAgLAFgIQAEgJAFABQAGgBAEAJQAFAIAAALQAAAMgFAIQgEAJgGgBQgFABgEgJg");
	this.shape_168.setTransform(53.825,0.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C6907F").s().p("AgNATQgFgIAAgLQAAgKAFgIQAGgIAHAAQAIAAAGAIQAFAIAAAKQAAALgFAIQgGAIgIAAQgHAAgGgIg");
	this.shape_169.setTransform(50.825,0.975);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C6907F").s().p("AgLAUQgEgIAAgMQAAgLAEgIQAFgJAGAAQAHAAAFAJQAEAIAAALQAAAMgEAIQgFAJgHAAQgGAAgFgJg");
	this.shape_170.setTransform(55.7,2.625);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#89B34B").s().p("ABoBSQgBgBACgOQACgNgBgBQgBgBgIAIQgIAJgBgBQgBgBACgNQADgNgBgBQgCgCgHAJQgIAJgBgBQgBgBACgNQADgNgBgBQgBgBgIAJQgIAIgBgBQgBAAACgNQACgNgBgBQgCgBgHAJQgHAJgBAAQgBgBACgNQACgNgCgBQgBAAgHAJQgHAKgBgBQgBAAABgNQACgMgCgBQgBgBgHAJQgHAKgBAAQgBgBABgNQABgMgBgBQgBAAgGALQgFAJgCAAQgBgBAAgMQAAgNgBgBQgCAAgFALQgGAKgBgBQgCAAAAgMQAAgNgBgBQgCAAgFALQgGALgBAAQgBAAgBgNQgBgNgBgBQgCAAgFAMQgFALgBAAQgBAAgBgNQgCgNgBAAQgCgBgEAMQgFAMgBAAQgCAAgBgNQgCgNgCAAQgBAAgEAMQgFAMgBAAQgCAAgBgNQgCgNgCAAQgCAAgEANQgEAMgBAAQgCAAgBgNQgCgNgBAAQgCAAgFAMQgFANgBAAQgCgBABgSIAAgBIgBgFIAAgCQgIgRADgBQABgBAJAJQAIAJACgBQACAAgCgNQgBgNACgBQACgBAHALQAHALABgBQACAAAAgNQABgNACAAQACgBAFAMQAGAMABgBQACAAACgMQACgNACAAQACAAAEAMQAEAMACAAQABAAAEgMQADgNACAAQACABADAMQADANABAAQACABAEgMQAEgMACAAQACABACANQACANABAAQACAAAGgLQAFgLACAAQABABAAANQABANABABQACAAAGgKQAGgLACABQACABgBANQAAANACABQABABAIgKQAHgKABABQACABgCANQgBANABABQACABAIgJQAIgJACABQABACgCAMQgDANABABQACABAJgHQAJgIABACQACABgEAMQgEANABABQACAAAJgFQAKgHABACQACACgFAKQgFAMABABQABABALgEQAKgFABACQABACgGAKQgGAKABACQABACALgDQALgDABABQABACgIAJQgIAJABABQABACALAAQAMAAAAACQABACgFADIgJAEIgBgBQgBAAgGAKQgGAJgCAAIAAAAg");
	this.shape_171.setTransform(69.6963,5.2344);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#89B34B").s().p("AABgBQAGgEACABIABACIAAAEIgJACIgKABIAKgGg");
	this.shape_172.setTransform(56.025,1.4722);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#89B34B").s().p("AAAABIgGgHQAAgBAFgDIAIAVIgHgKg");
	this.shape_173.setTransform(81.875,12.775);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#AED077").s().p("AimBKQAGgNADgDQAGAFAAABQgBACgMALIgHAGIAFgJgAiUBGQgGgOgBABIgCABIgFgEQgLgIACgDQABgBANACQAOADABgDQABgBgIgMQgIgMACgCQABgCANAGQAMAGACgCQABgCgGgOQgGgMACgCQABgCAMAHQALAIACgCQACgBgFgOQgEgPACgBQACgCAKAKQALAJACgBQABgBgCgQQgDgPACgCQACgBAJALQAKALACgBQABgBgBgQQgBgQACgBQACgBAIAMQAJANACgBQABgBAAgQQAAgQACgBQADgBAHAOQAHANACgBQACAAACgQQABgQACgBQACAAAGAOQAGAOACgBQACAAACgPQACgQACAAQADAAAEAOQAFAPACgBQACAAAEgPQAEgPACAAQADAAADAPQAEAPABAAQADAAAFgOQAFgPACAAQADABACAPQACAPACABQACAAAHgOQAGgOACABQADAAAAAQQABAQACAAQACABAIgNQAIgNACABQACABgBAPQgBAQACABQACABAKgMQAJgLACABQACABgDAPQgDAPABABQACACAMgJQAMgJABABQACACgHANIgDAGQADAAALAKIAHAHIgIgDQgMgDgDgCIABgHQgDAFABABIABABIgBAHQgBAOgCAAQgCAAgEgPQgEgPgCgBQgCAAgEAPQgDAOgCgBQgCAAgDgOQgDgQgCAAQgCAAgEAPQgEANgCAAQgBAAgEgOQgDgQgCAAQgCAAgEAPQgEAOgBAAQgCAAgEgOQgDgPgCAAQgCAAgDAPQgEAOgBAAQgCAAgEgOQgEgPgCAAQgCABgDAPQgDAOgBAAQgCAAgFgNQgEgPgCAAQgCABgCAPQgCAPgBAAQgCAAgFgNQgFgOgCAAQgCABgBAPQgBAPgCAAQgBABgGgOQgGgNgCAAQgCABAAAOQAAAQgCAAQgCABgGgNQgHgNgBABQgCABAAAOQAAAQgBAAQgCABgHgNQgHgNgCABQgBABAAAPQABAQgCABQgBAAgIgMQgHgNgCABQgCABACAQQABAQgCABQgBABgIgNQgIgMgCABQgCABACAQQABAQgBABQgCABgIgMQgIgMgCABQgCACACAPQACAQgCABQgCACgIgMQgIgMgBABQgCABABARQABAQgBABIgBAAQgCAAgGgMg");
	this.shape_174.setTransform(35.8285,1.875);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#AED077").s().p("AiBCKQABgSACgDIgGAAQgMgCAAgDQAAgCANgGQANgFABgDQAAgCgLgGQgMgHABgDQABgCANgCQANgCABgDQAAgCgKgJQgKgJABgCQABgDANABQANAAABgCQABgCgJgLQgKgLACgCQABgCANACQAMADABgDQABgCgIgMQgIgKABgDQACgCAMAEQANAFABgCQABgCgHgNQgHgNABgCQACgCAMAGQAMAGABgCQABgCgFgOQgGgOABgCQACgCALAIQALAIACgCQABgBgEgPQgFgPABgBQACgCALAJQALAIABgBQACgBgDgQQgDgPABgCQACgBAKAKQAJAKACgBQABgBgBgQQgCgQACgBQACgCAHAMQAJAMACgBQACgBgBgRQAAgQACgBQACgBAIANQAHAMACAAQACgBABgQQABgQACgBQADgBAGAOQAGANACAAQACgBADgQQACgQACAAQADgBAEAPQAFAPACgBQACAAAEgQQAFgPACAAQACAAACAPQADAPABAAQACABAHgPQAIgOABAAQADAAgCAQIgBAGIgCABQgBABAEAPQAFAPgCABQgCAAgJgLQgKgMgCABQgBABACAPQACAQgCABQgCAAgIgLQgJgMgCABQgCAAACAQQACAPgCABQgBABgJgMQgIgLgCABQgCABACAPQADAPgCABQgBABgJgLQgJgMgCACQgCABADAPQADAPgBABQgCABgJgLQgJgLgCACQgBABADAPQADAPgBABQgBABgKgKQgJgKgCABQgBABAEAPQADAPgBABQgBABgJgKQgKgJgBABQgCACAFAOQAFAOgBABQgCACgKgJQgLgJgBACQgCABAGAOQAFAOgBABQgBABgLgIQgLgHgBACQgCABAGANQAGAOgBABQgBACgLgIQgLgHgBACQgCACAHANQAGAOgBABQgBACgMgHQgLgHgBACQgCACAHANQAHAOgBABQgBACgLgGQgMgHgBACQgCACAIANQAHAOgBABQgBACgLgGQgMgFgBABQgCACAIAOQAHANAAABQgCACgLgGQgLgGgBACQgCACAHAOQAHAOgBACQgBACgKgJIgFgEQAAAEgGAOIgFALIABgMgAB4hzQgBgBABgJQAEAAALACIAKABIgJADQgLAEgEAAIgBAAgAB4h9IAAAAg");
	this.shape_175.setTransform(66.799,-14.025);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A0C95E").s().p("ABaB8QgBgBAHgMQAGgNgBgCQgBgBgLAFQgLAGgBgCQgBgBAHgMQAIgLgCgCQgBgCgLAFQgLAFgBgCQgBgBAHgMQAHgLgBgCQgBgCgLAGQgMAFgBgBQgBgCAHgLQAHgMgCgCQgBgBgLAGQgLAFgBgBQgBgBAGgMQAHgMgCgCQgBgBgLAGQgKAHgCgCQgBgBAGgMQAGgMgCgCQgBgBgKAHQgKAIgCgCQgBgBAFgMQAFgMgBgBQgBgCgLAIQgJAHgBgCQgBgBAEgLQAEgNgBgBQgCgBgIAIQgKAJgBgBQgBgBADgNQAEgNgBgCQgCgBgJAJQgJAJgBgBQgCgBAEgNQADgNgCgBQgBgBgJAJQgJAKgBgBQgCgBADgNQADgOgCgBQgBgBgJAKQgJAKgBAAQgCgBADgOQACgOgCAAQgCgBgIAKQgIAKgCAAQgBgBACgOQABgNgBgBQgCgBgIALQgJAKgBgBQgCgBACgNQACgOgCAAQgCgBgJAKQgJAKgBAAQgCgBAEgNQAEgNgBgBIgCAAIgBgNQgBgHACgBQABAAAHANQAHANACAAQACAAACgOQACgNACAAQACAAAFANQAEAOACAAQACABAEgNQAFgNACAAQACABADAOQACAOACAAQACABAGgMQAGgMACAAQACABABAOQABAPACAAQACABAHgLQAHgLACABQACABAAAOQAAAOABABQACABAJgKQAIgKACABQABABgBAOQgCAOACABQABABAJgJQAJgJACABQACACgEANQgDAOACABQABABALgHQAKgIACABQABACgEANQgFANABABQACABALgGQAKgHACABQABACgFANQgGAMACACQABABAMgFQALgGABACQACACgHAMQgHAKABACQABABANgDQALgDACACQABABgIAKQgIALABACQABABANgCQAMgCABACQABACgJAKQgIAJAAACQABACANAAQANgBAAACQABADgKAIQgJAIAAABQABADANABQAMACABACQAAADgLAFQgKAGAAACQAAADANAEQANAFAAACQAAACgHABIgLACIgCAAQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAgBABIABABIgKAHIgFACIgBAAg");
	this.shape_176.setTransform(40.1667,-12.8025);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A0C95E").s().p("AACACIgNgDQATgDAEABQABAGgBABIgBAAIgJgCg");
	this.shape_177.setTransform(26.45,-22.6494);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A0C95E").s().p("AgEgKIAEgCIABgBQACACAAAKIACAPQgJgSAAgGg");
	this.shape_178.setTransform(51.25,-0.275);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A55B59").s().p("AhBEhIAFgIQADgEAAgFQABgGgDgGQgDgHABgFQABgGAEgGQAEgFAAgGQABgGgDgHQgCgGAAgGQABgGAEgGQAEgFABgHQABgGgDgGQgDgHAAgFQABgGAEgGQAEgFABgGQABgGgDgGQgDgHABgGQABgGAEgFQAEgGAAgGQABgGgDgHQgDgGABgGQABgGAEgGQAEgFAAgGQABgGgDgHQgCgGAAgHQABgGAEgEQAEgGABgGQABgGgDgHQgDgGABgHQAAgGAEgFQAFgFAAgGQABgHgDgGQgDgHABgGQABgGAEgFQAEgGAAgGQABgGgDgGQgCgHAAgGQABgGAEgFQAEgGABgGQAAgGgCgHQgDgGAAgGQABgGAEgGQAEgFABgGQABgGgDgHQgDgHABgGQABgGAEgFQADgGAAgGQABgGgCgHQgCgGAAgHIABADIACACIAAgIIAAAIIAAgIIACAIIAAgJIABAJIAAgJIABAJQABAAgBgJQABAAABAIIABgIIABAIIAAgJIACAJIAAgJIAAAEIAAABQABAFAEAFQADAFABAGQAAAFgDAGQgDAGABAGQAAAGAEAFQAEAGABAFQAAAGgCAHQgDAGAAAGQABAGAEAGQAEAFAAAGQABAGgDAHQgDAGAAAGQABAGAEAFQAEAGAAAGQABAGgDAGQgDAHABAGQAAAGAEAGQAEAFABAGQAAAGgCAHQgDAGAAAHQABAGAEAFQAEAGAAAGQABAGgDAGQgDAHAAAFQABAGAEAGQAEAFAAAGQABAGgDAHQgDAHABAGQAAAGAEAFQAEAGABAGQAAAGgCAHQgDAGAAAGQABAHAEAFQAEAGAAAGQABAGgDAGQgDAHAAAGQABAGAEAGQAEAFAAAGQABAGgDAHQgDAGABAGQAAAGAEAGQAEAFABAHQAAAGgCAGQgDAGAAAHQABAGAEAFQAEAGAAAGQABAGgDAGQgDAGAAAFg");
	this.shape_179.setTransform(52.1792,30.375);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C6907F").s().p("AgOAYQgHgKAAgOQAAgNAHgKQAGgKAIAAQAJAAAGAKQAHAKAAANQAAAOgHAKQgGAKgJAAQgIAAgGgKg");
	this.shape_180.setTransform(-1.425,-44.275);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C6907F").s().p("AgTAXQgIgKAAgNQAAgMAIgJQAIgJALAAQAMAAAIAJQAIAJAAAMQAAANgIAKQgIAIgMABQgLgBgIgIg");
	this.shape_181.setTransform(2.925,-43.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#C6907F").s().p("AgQAYQgHgKAAgOQAAgNAHgKQAHgKAJAAQAKAAAHAKQAHAKAAANQAAAOgHAKQgHAKgKAAQgJAAgHgKg");
	this.shape_182.setTransform(-4.15,-41.525);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#89B34B").s().p("AiiBVQgJgMgCABIgBABIgNgGQgHgDABgCQAAgCARAAQARAAABgCQABgCgLgKQgLgKABgDQACgCAQAEQAPADACgCQABgCgJgMQgJgMACgCQACgCAPAFQAPAGACgCQABgBgHgOQgHgNACgCQACgCAOAIQAOAHACgBQACgCgGgOQgFgOACgCQACgCANAJQANAJACgBQACgBgEgPQgDgPACgCQADgBALAKQAMALACgCQACgBgCgPQgCgPACgBQADgCAKAMQALALACgBQACAAAAgQQAAgQADgBQACgBAJANQAJANACgBQACAAAAgQQABgQADAAQACgBAIANQAIAOACgBQADAAADgQQACgPADAAQADgBAGAOQAGAOACAAQADAAAEgPQAFgPACAAQADAAAFAOQAEAPADAAQACAAAHgPQAGgOACAAQADAAADAPQADAPACAAQADABAIgOQAIgOACAAQADABABAPQABAPACABQACAAALgMQAKgNACABQADABgCAPQgCAPACABQADABANgLQAMgLACABQACACgDAHIgGANQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAABQgDAEACABIABABQAAAWgCAAQgCAAgHgOQgHgPgDAAQgCABgCAPQgCAPgDAAQgCAAgGgPQgGgOgCAAQgCAAgDAPQgDAPgCAAQgCAAgGgOQgHgOgCAAQgCAAgDAPQgCAPgCAAQgCABgHgOQgGgOgDAAQgCAAgCAPQgCAQgCAAQgCAAgHgOQgHgNgCAAQgCABgBAPQgBAPgDABQgCAAgHgNQgIgOgCABQgCAAAAAQQgBAPgCAAQgBAAgJgMQgIgNgCABQgDABABAPQAAAPgCAAQgBABgIgMQgJgMgCAAQgCABACAPQABAPgCAAQgBABgKgMQgKgKgCAAQgCABACAPQACAPgBABQgCAAgKgLQgKgMgCABQgCACADAPQACAPgBABQgCABgLgLQgKgLgCABQgCABADAPQADAPgBABQgCABgLgKQgLgKgCABQgCACAEAPQAEAPgCABQgCABgLgKQgLgKgCABQgDACAFAPQAEAPgCABQgCACgLgLQgMgKgBABQgCACADAQQAEAQgCABIAAAAQgDAAgJgLg");
	this.shape_183.setTransform(-24.5912,-38.4417);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#89B34B").s().p("AAAAFQgLgBgDgCIAAgFIABgCQAEgBAYAMIgPgBg");
	this.shape_184.setTransform(-4.625,-42.8759);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#89B34B").s().p("AgDAAQADgKADgCQAIADgBABQAAADgIAGIgMAMIAHgNg");
	this.shape_185.setTransform(-42.3947,-29.575);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#AED077").s().p("ADxBaQgRgMgBgDQgBgBAJgGIgCgBQgCgBgJAQQgJAQgDgCQgCgBABgTQACgTgDgCQgCgBgMAOQgMAOgDgCQgCgBADgSQACgTgDgCQgCgBgMAOQgMAOgCgBQgCgBACgTQACgSgDgCQgCgBgMAOQgLAOgDgBQgCgBACgSQACgTgDgBQgCgBgLAPQgLAPgDgBQgCgBABgSQABgTgDgBQgCAAgKAPQgKAPgDgBQgCAAAAgTQAAgRgCgBQgDgBgJAPQgKAQgCgBQgCgBgBgSQgBgRgCgBQgDAAgIAPQgJAQgCAAQgCgBgCgRQgCgSgCgBQgDAAgHAQQgIAQgDAAQgCgBgDgRQgCgSgDAAQgDAAgHARQgHAQgCgBQgDAAgDgRQgEgSgDAAQgDAAgGARQgGARgCAAQgDAAgEgRQgFgSgDAAQgDAAgFASQgGARgCAAQgDAAgFgRQgFgRgDAAQgDAAgFASQgFARgDAAQgCABgGgRQgGgRgCAAQgDABgFASQgFARgCAAQgDABgFgRQgGgRgCAAQgDAAgGATQgGARgCAAQgDAAgCgRIgBgIIABgBQABgBgEgGIACAIQgFACgSAEIgNAEIALgIQASgNAEABIgFgIQgLgPAEgCQACgBARAKQARAKADgBQACgBgFgSQgFgSADgBQADgCAOAOQAPANACgBQADgBgCgSQgBgSADgBQADgBAMAPQAMAPADgBQACAAABgTQABgSAEgBQADAAAKAQQAJAQADAAQADgBADgSQADgSADAAQAEAAAHARQAIARADAAQADAAAFgSQAFgSADAAQAEAAAFASQAGASADAAQADAAAHgRQAHgRAEAAQADABADASQADASADABQACAAAJgQQAJgRADABQADABACASQADATACAAQADABALgPQALgPADAAQADABAAATQAAASACABQADABAMgOQANgOADABQADACgCASQgCATACABQADABAOgNQAOgNADACQADABgFASQgEASADACQACABAQgLQAPgLADACQADACgHARQgGARACABQADACARgJQAQgIADACQACACgIAPQgJAQACACQACACASgHQATgGABACQADACgMAOQgLAOABACQACADAUgDQAUgDABACQACAEgQAJIgHAEQAEAEAJAOIAIAMIgLgIgAjXgLIAAAAg");
	this.shape_186.setTransform(24.7875,-42.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#AED077").s().p("AC5ClQgJgRgBgFIAGgEQgGABAAACIAAABIgHAFQgPAKgCgCQgBgCAKgQQAKgRgCgDQgBgCgRAIQgRAHgBgCQgBgCAKgQQALgPgBgDQgCgCgRAHQgRAHgBgCQgCgCALgQQAKgPgCgDQgBgCgRAIQgRAHgCgCQgBgCAKgQQAKgPgCgDQgCgCgQAIQgRAIgBgCQgCgCAJgQQAKgQgCgCQgCgCgQAJQgRAJgBgCQgCgBAJgRQAIgPgCgCQgCgCgPAJQgQAJgCgBQgBgCAHgQQAIgQgCgCQgCgCgPAKQgQALgCgCQgCgBAHgRQAHgRgCgCQgCgBgOALQgOALgBgBQgDgBAGgSQAGgRgCgCQgCgBgOAMQgOAMgCgBQgCgBAFgSQAFgSgCgBQgDgCgNANQgOAMgCgBQgCgBAEgSQAFgRgDgCQgCgBgNANQgOAOgCgBQgCgBADgSQAEgSgDgCQgCgBgNAOQgNANgCAAQgCgBADgTQACgSgCgBQgDgBgNAOQgNAOgCgBQgCgBADgSQADgSgDgBQgDgBgNAOQgOANgCgBQgDgBAGgRQAGgSgCgBIgCAAQABAKgBAAQgDACgVgGIgMgDIANgCQARgCAGABIgBgIQgEgSAEgBQADAAAKARQALARADgBQACAAAEgSQADgSADAAQADABAHASQAGASADAAQADABAHgRQAGgRAEAAQADABAEASQAEATADABQACABAKgQQAJgQADAAQADABABATQACATADABQACABAMgPQALgPADACQADABgBATQAAATACABQADABAMgNQAMgOADACQADABgDATQgDASADACQACABAOgMQAOgMADACQADACgFASQgFASACABQADACAQgKQAPgKADACQACACgHARQgHARACACQACABARgIQAQgJACACQADACgJARQgIAQACACQACACARgHQASgHACACQACADgKAPQgLAQACACQACACASgFQASgFACACQACADgMANQgMAOACADQABACATgDQATgDABADQACADgOAMQgNANABACQACADATAAQATgBABADQACADgPAKQgPALABADQABADATACQAUACAAADQABADgQAIQgRAIABACQAAADATAGQATAHAAACQABAEgTACIgJABQADADACAVIABANIgFgLg");
	this.shape_187.setTransform(-20.3243,-61.2125);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A0C95E").s().p("AiZCHIAAgBQAAgBgHgBQAAgBgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgSgCQgJgBABgDQAAgCASgGQASgFABgDQABgCgQgHQgRgHABgDQABgDATgCQATgCABgCQAAgCgOgKQgPgJACgDQABgCATAAQASABABgDQABgCgMgLQgNgLABgDQACgCASACQASADACgCQABgCgMgMQgLgNACgBQACgCARADQASAFABgDQACgBgKgNQgKgOACgCQACgCARAHQARAGACgCQACgCgIgPQgJgOADgCQACgCAQAIQAQAIACgCQABgBgGgQQgHgPACgBQADgCAPAJQAPAJACgCQADgBgFgQQgFgQADgCQADgBANAKQANALACgBQADgBgDgRQgDgQADgCQADgBAMAMQAMAMADgBQACgBAAgRQgBgRADgBQADgBAKANQALANADAAQADgBABgRQACgRACgBQAEgBAIAPQAJAOADgBQACAAAEgRQAEgQADgBQADAAAHAPQAGAPADAAQADgBAGgQQAHgQACAAQAEAAADAQQADAQACAAQADAAAKgPQAKgPADAAQADABgBAIIgDAPIgCAAQgCABAGAQQAGAPgDABQgCABgNgMQgNgMgDABQgCABACAQQADAQgCAAQgCABgNgMQgMgNgDABQgCABADAQQADAQgDABQgCABgMgMQgNgMgCABQgCABADAQQADAQgCABQgCABgNgMQgMgMgDABQgCACAEAPQAEAQgCABQgCABgNgLQgNgLgCABQgDABAFAQQAFAPgCABQgCABgNgKQgOgLgCACQgCABAGAPQAFAQgCABQgBABgOgKQgNgKgCACQgCABAGAPQAGAOgBABQgCABgOgIQgPgJgCACQgCABAIAOQAHAPgCABQgBACgPgJQgPgIgCABQgCACAIAOQAIAPgBABQgCACgQgIQgPgIgCACQgCACAJAOQAJAOgBACQgCACgQgHQgQgHgCABQgCACAKAOQAKAOgCACQgBABgQgGQgRgGgBACQgCACAKANQAKAOgBACQgCACgQgGQgQgGgCABQgCADALANQAKAOgBABQgBACgQgGQgQgGgCACQgCACAKAOQAKAPgBABIgBAAQgFAAgRgLg");
	this.shape_188.setTransform(18.5237,-59.7055);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#A0C95E").s().p("AgQAFQgCgBACgIIAiADQgZAGgHAAIgCAAg");
	this.shape_189.setTransform(38.525,-71.2632);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A0C95E").s().p("AgFgBQACgMACgCIACAAIAGAEQAAADgGAJIgHAPIABgRg");
	this.shape_190.setTransform(2.375,-44.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A55B59").s().p("AhYFTQAAgFgEgHQgEgHABgHQABgHAGgHQAGgHAAgHQABgHgEgHQgEgIAAgIQABgHAGgGQAGgGAAgIQABgHgEgIQgEgHABgHQABgHAFgHQAGgHABgGQABgIgFgHQgEgIABgHQABgHAGgHQAGgGAAgIQABgHgEgHQgEgIAAgHQABgHAGgHQAGgGAAgIQABgIgEgHQgEgIABgHQABgHAFgHQAGgGABgHQAAgHgEgHQgEgIABgHQABgHAGgGQAGgHAAgHQABgHgEgIQgEgHAAgIQABgHAGgHQAGgGAAgHQABgIgEgHQgEgIABgHQABgHAFgHQAGgGABgHQABgGgFgIQgEgHABgIQABgGAFgHQAGgGABgIQABgHgEgHQgEgIAAgHQABgHAGgGQAGgHAAgGQABgHgEgHQgEgHAAgHQABgGAFgGQAGgGABgHIgBgBIABgDIAAAJIACgJIAAAKIADgKQABAAgBAKIADgKQABAAAAAKIACgKIgBAKIACgKIAAALIABgKQABAAAAAIIAAgIIABAKQACAAACgFQABAHgEAHQgDAIAAAIQABAGAGAHQAGAHABAHQABAHgEAIQgEAIABAHQABAHAGAHQAGAFABAIQABAHgEAIQgEAHABAIQABAGAGAHQAGAGAAAIQABAHgEAHQgEAIABAIQABAGAGAHQAGAGABAHQABAHgEAIQgEAIABAHQABAHAGAHQAGAGABAHQABAHgEAJQgEAHABAIQABAGAGAHQAGAFABAIQABAHgEAHQgEAIABAIQABAGAFAHQAGAGABAIQABAGgEAJQgEAHABAHQABAHAGAHQAGAGABAHQABAIgEAHQgEAIABAHQABAHAGAGQAGAGABAHQABAHgEAIQgEAHAAAIQABAGAGAHQAGAGABAIQABAHgEAHQgEAIABAHQABAIAGAFQAGAHABAHQABAHgEAIQgEAHABAGQABAHAEAFQAGAFABADg");
	this.shape_191.setTransform(0.9469,-8.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A55B59").s().p("AAAgEIABACIgBAHIAAgJg");
	this.shape_192.setTransform(-0.7875,-42.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F2CEAC").s().p("AotBoQj/gaAygxQAPgQAxgRIA5gTQAVgIgogbQgcgTgtgVQgagMBBgFIBGgDQRlAWDdgCQCOgCkJA3QjfAtiQATQhJAKgEAFQAAABAdAXQANAKg6AOQg8APhlAKQh9AMiAAAQiMAAiOgPg");
	this.shape_193.setTransform(-5.8108,67.0202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.instance_6},{t:this.instance_5},{t:this.shape_78},{t:this.instance_4},{t:this.instance_3},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_2},{t:this.instance_1},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tiki_Hut_2, new cjs.Rectangle(-82.9,-78.8,165.9,157.7), null);


(lib.Darken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_14();
	this.instance.setTransform(-6.6,3.6,0.6196,0.6196,0,0,0,2,4.5);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-2.65,7.3,0.6196,0.6196,0,0,0,3.4,2.9);
	this.instance_1.alpha = 0.8008;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(3.6,7.4,0.6196,0.6196,0,0,0,3.6,2.4);
	this.instance_2.alpha = 0.8008;

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(0.25,-5.7,0.6196,0.6196,0,0,0,1.6,3.6);
	this.instance_3.alpha = 0.8008;

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(0,6.65,0.6196,0.6196,0,0,0,1.2,4.4);
	this.instance_4.alpha = 0.8008;

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(-4.05,-3.95,0.6196,0.6196,0,0,0,2.4,2.5);
	this.instance_5.alpha = 0.8008;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(4.8,4.55,0.6196,0.6196,0,0,0,3.3,3.3);
	this.instance_6.alpha = 0.8008;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(1,6.6,0.6196,0.6196,0,0,0,1.3,4.5);
	this.instance_7.alpha = 0.8008;

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(-5.95,0.6,0.6196,0.6196,0,0,0,3.3,1.9);
	this.instance_8.alpha = 0.8008;

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(-0.9,1.7,0.6196,0.6196,0,0,0,2,2.5);
	this.instance_9.alpha = 0.8008;

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(0.45,2.9,0.6196,0.6196,0,0,0,1.1,4);
	this.instance_10.alpha = 0.8984;

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(1.8,1.9,0.6196,0.6196,0,0,0,2.6,2.8);
	this.instance_11.alpha = 0.8984;

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(2.45,0.3,0.6196,0.6196,0,0,0,3.6,1.2);
	this.instance_12.alpha = 0.8008;

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(0,-1.65,0.6196,0.6196,0,0,0,0.6,3.7);
	this.instance_13.alpha = 0.8984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9677C").s().p("AgNAIIAGgfIAVAvg");
	this.shape.setTransform(3.5647,-1.211,0.6196,0.6196);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9677C").s().p("AgMgHIAZgQIgRAvg");
	this.shape_1.setTransform(3.5957,1.7474,0.6196,0.6196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9677C").s().p("AgGgNIAeAHIgvAVg");
	this.shape_2.setTransform(1.83,3.6525,0.6196,0.6196);

	this.instance_14 = new lib.Path_17();
	this.instance_14.setTransform(-1.1,3.75,0.6196,0.6196,0,0,0,2.6,2.6);
	this.instance_14.alpha = 0.8008;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9677C").s().p("AgOgXIAdARIgJAeg");
	this.shape_3.setTransform(-2.9715,1.9178,0.6196,0.6196);

	this.instance_15 = new lib.Path_19();
	this.instance_15.setTransform(-2.95,-0.95,0.6196,0.6196,0,0,0,1.7,2.8);
	this.instance_15.alpha = 0.8008;

	this.instance_16 = new lib.Path_20();
	this.instance_16.setTransform(-1.2,-2.85,0.6196,0.6196,0,0,0,2.4,1.8);
	this.instance_16.alpha = 0.8008;

	this.instance_17 = new lib.Path_21();
	this.instance_17.setTransform(1.7,-2.85,0.6196,0.6196,0,0,0,2.6,1.8);
	this.instance_17.alpha = 0.8008;

	this.instance_18 = new lib.Path_22();
	this.instance_18.setTransform(-1.75,0.5,0.6196,0.6196,0,0,0,3.6,1.9);
	this.instance_18.alpha = 0.8008;

	this.instance_19 = new lib.Path_23();
	this.instance_19.setTransform(0.4,2.5,0.6196,0.6196,0,0,0,1.6,3.8);
	this.instance_19.alpha = 0.8008;

	this.instance_20 = new lib.Path_24();
	this.instance_20.setTransform(2.45,0.3,0.6196,0.6196,0,0,0,3.6,2);
	this.instance_20.alpha = 0.8008;

	this.instance_21 = new lib.Path_25();
	this.instance_21.setTransform(1.7,-1.1,0.6196,0.6196,0,0,0,2.4,2.8);
	this.instance_21.alpha = 0.8984;

	this.instance_22 = new lib.Path_26();
	this.instance_22.setTransform(1.8,1.9,0.6196,0.6196,0,0,0,2.6,2.8);
	this.instance_22.alpha = 0.8008;

	this.instance_23 = new lib.Path_27();
	this.instance_23.setTransform(-1.15,1.95,0.6196,0.6196,0,0,0,2.5,2.9);
	this.instance_23.alpha = 0.8008;

	this.instance_24 = new lib.Path_28();
	this.instance_24.setTransform(-1.15,-1.15,0.6196,0.6196,0,0,0,2.5,2.5);
	this.instance_24.alpha = 0.8008;

	this.instance_25 = new lib.Path_29();
	this.instance_25.setTransform(0.25,-1.65,0.6196,0.6196,0,0,0,1.6,3.7);
	this.instance_25.alpha = 0.8008;

	this.instance_26 = new lib.Path_30();
	this.instance_26.setTransform(-1,-1.15,0.6196,0.6196,0,0,0,2.1,2.8);
	this.instance_26.alpha = 0.8008;

	this.instance_27 = new lib.Path_31();
	this.instance_27.setTransform(-1.55,-0.05,0.6196,0.6196,0,0,0,3.1,1.2);
	this.instance_27.alpha = 0.8008;

	this.instance_28 = new lib.Path_32();
	this.instance_28.setTransform(-1.55,1.1,0.6196,0.6196,0,0,0,2.9,1.6);
	this.instance_28.alpha = 0.8008;

	this.instance_29 = new lib.Path_33();
	this.instance_29.setTransform(-0.85,2,0.6196,0.6196,0,0,0,1.9,3.1);
	this.instance_29.alpha = 0.8008;

	this.instance_30 = new lib.Path_34();
	this.instance_30.setTransform(0.3,2.5,0.6196,0.6196,0,0,0,0.9,3.9);
	this.instance_30.alpha = 0.8008;

	this.instance_31 = new lib.Path_35();
	this.instance_31.setTransform(1.5,1.95,0.6196,0.6196,0,0,0,2.3,3);
	this.instance_31.alpha = 0.8008;

	this.instance_32 = new lib.Path_36();
	this.instance_32.setTransform(2.15,0.95,0.6196,0.6196,0,0,0,3.3,1.4);
	this.instance_32.alpha = 0.8008;

	this.instance_33 = new lib.Path_37();
	this.instance_33.setTransform(2.15,-0.2,0.6196,0.6196,0,0,0,3.3,1.3);
	this.instance_33.alpha = 0.8008;

	this.instance_34 = new lib.Path_38();
	this.instance_34.setTransform(1.45,-1.25,0.6196,0.6196,0,0,0,2.2,2.9);
	this.instance_34.alpha = 0.8008;

	this.instance_35 = new lib.Path_39();
	this.instance_35.setTransform(0.3,-1.65,0.6196,0.6196,0,0,0,0.9,3.7);
	this.instance_35.alpha = 0.8008;

	this.instance_36 = new lib.Path_40();
	this.instance_36.setTransform(3.05,-6.2,0.6196,0.6196,0,0,0,4.8,2.8);
	this.instance_36.alpha = 0.8984;

	this.instance_37 = new lib.Path_41();
	this.instance_37.setTransform(6.85,-2.7,0.6196,0.6196,0,0,0,3.5,5);
	this.instance_37.alpha = 0.8008;

	this.instance_38 = new lib.Path_42();
	this.instance_38.setTransform(6.9,3.1,0.6196,0.6196,0,0,0,3.3,5.1);
	this.instance_38.alpha = 0.8984;

	this.instance_39 = new lib.Path_43();
	this.instance_39.setTransform(3.4,7,0.6196,0.6196,0,0,0,5.2,3.8);
	this.instance_39.alpha = 0.8008;

	this.instance_40 = new lib.Path_44();
	this.instance_40.setTransform(-2.45,7.05,0.6196,0.6196,0,0,0,4.8,3.8);
	this.instance_40.alpha = 0.8008;

	this.instance_41 = new lib.Path_45();
	this.instance_41.setTransform(-6.25,3.4,0.6196,0.6196,0,0,0,2.8,5.1);
	this.instance_41.alpha = 0.8008;

	this.instance_42 = new lib.Path_46();
	this.instance_42.setTransform(-6.25,-2.4,0.6196,0.6196,0,0,0,2.8,5);
	this.instance_42.alpha = 0.8984;

	this.instance_43 = new lib.Path_47();
	this.instance_43.setTransform(-2.65,-6.2,0.6196,0.6196,0,0,0,4.7,2.8);
	this.instance_43.alpha = 0.8008;

	this.instance_44 = new lib.Path_48();
	this.instance_44.setTransform(1.8,4.3,0.6196,0.6196,0,0,0,2.6,2.9);
	this.instance_44.alpha = 0.8984;

	this.instance_45 = new lib.Path_49();
	this.instance_45.setTransform(-1.1,4.45,0.6196,0.6196,0,0,0,2.6,2.8);
	this.instance_45.alpha = 0.8008;

	this.instance_46 = new lib.Path_50();
	this.instance_46.setTransform(-3.65,1.95,0.6196,0.6196,0,0,0,1.8,2.8);
	this.instance_46.alpha = 0.8008;

	this.instance_47 = new lib.Path_51();
	this.instance_47.setTransform(-3.7,-0.95,0.6196,0.6196,0,0,0,1.7,2.8);
	this.instance_47.alpha = 0.8984;

	this.instance_48 = new lib.Path_52();
	this.instance_48.setTransform(-1.2,-3.5,0.6196,0.6196,0,0,0,2.4,2);
	this.instance_48.alpha = 0.8008;

	this.instance_49 = new lib.Path_53();
	this.instance_49.setTransform(1.7,-3.6,0.6196,0.6196,0,0,0,2.6,2);
	this.instance_49.alpha = 0.8008;

	this.instance_50 = new lib.Path_54();
	this.instance_50.setTransform(4.1,-1.1,0.6196,0.6196,0,0,0,2.6,2.8);
	this.instance_50.alpha = 0.8008;

	this.instance_51 = new lib.Path_55();
	this.instance_51.setTransform(4.35,1.75,0.6196,0.6196,0,0,0,2.6,2.8);
	this.instance_51.alpha = 0.8008;

	this.instance_52 = new lib.Path_56();
	this.instance_52.setTransform(4.05,-3.7,0.6196,0.6196,0,0,0,3.7,3.4);
	this.instance_52.alpha = 0.8008;

	this.instance_53 = new lib.Path_57();
	this.instance_53.setTransform(6.4,0.3,0.6196,0.6196,0,0,0,4.2,3.6);
	this.instance_53.alpha = 0.8008;

	this.instance_54 = new lib.Path_58();
	this.instance_54.setTransform(4.35,4.2,0.6196,0.6196,0,0,0,4,4.2);
	this.instance_54.alpha = 0.8008;

	this.instance_55 = new lib.Path_59();
	this.instance_55.setTransform(0.45,6.6,0.6196,0.6196,0,0,0,3.6,4.5);
	this.instance_55.alpha = 0.8008;

	this.instance_56 = new lib.Path_60();
	this.instance_56.setTransform(-3.5,4.45,0.6196,0.6196,0,0,0,3.1,4.2);
	this.instance_56.alpha = 0.8984;

	this.instance_57 = new lib.Path_61();
	this.instance_57.setTransform(-5.95,0.45,0.6196,0.6196,0,0,0,3.3,3.7);
	this.instance_57.alpha = 0.8008;

	this.instance_58 = new lib.Path_62();
	this.instance_58.setTransform(-3.65,-3.45,0.6196,0.6196,0,0,0,3.1,3.3);
	this.instance_58.alpha = 0.8008;

	this.instance_59 = new lib.Path_63();
	this.instance_59.setTransform(0.25,-5.7,0.6196,0.6196,0,0,0,3.3,3.6);
	this.instance_59.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_3},{t:this.instance_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Darken, new cjs.Rectangle(-8,-7.9,15.9,15.8), null);


(lib.Scene_1_hut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hut
	this.TikiHut1 = new lib.Tiki_Hut_2();
	this.TikiHut1.name = "TikiHut1";
	this.TikiHut1.setTransform(271.25,151.7,2.9946,2.9946,0,0,0,0.1,0.3);

	this.Tiki_Hut = new lib.Tiki_Hut_2();
	this.Tiki_Hut.name = "Tiki_Hut";
	this.Tiki_Hut.setTransform(203.25,144.7,2.9946,2.9946,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TikiHut1}]}).to({state:[{t:this.Tiki_Hut}]},79).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.TikiHut1).to({_off:true,x:203.25,y:144.7},79).wait(161));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.GemStone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.redglow();
	this.instance.setTransform(-0.3,-0.4,0.9977,0.9939,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.2383;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Darken();
	this.instance_1.setTransform(-0.25,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GemStone, new cjs.Rectangle(-8.3,-8.3,16.200000000000003,16), null);


(lib.Scene_1_gem2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gem2
	this.instance = new lib.GemStone();
	this.instance.setTransform(179.2,177.55,1,1,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:110.55,y:171.15},79).wait(101).to({x:97.95,y:167.25},5).to({regX:0,regY:-0.1,x:21.95,y:158.45},13).to({regX:-0.1,x:-99.45,y:162.65},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_gem1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gem1
	this.instance = new lib.GemStone();
	this.instance.setTransform(138.65,177.55,1,1,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.65,y:171.15},79).wait(161));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.CC_Library_Animation_2_r3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.TikiHut1 = this.hut.TikiHut1;
	}
	this.frame_79 = function() {
		this.TikiHut1 = undefined;this.Tiki_Hut = this.hut.Tiki_Hut;
	}
	this.frame_80 = function() {
		this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_81 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_82 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_83 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_84 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_85 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_86 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_87 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_88 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_89 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_90 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_91 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_92 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_93 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_94 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_95 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_96 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_97 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_98 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_99 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_100 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_101 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_102 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_103 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_104 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_105 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_106 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_107 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_108 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_109 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_110 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_111 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_112 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_113 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_114 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_115 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_116 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_117 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_118 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_119 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_120 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_121 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_122 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_123 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_124 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_125 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_126 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_127 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_128 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_129 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_130 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_131 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_132 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_133 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_134 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_135 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_136 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_137 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_138 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_139 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_140 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_141 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_142 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_143 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_144 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_145 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_146 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_147 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_148 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_149 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_150 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_151 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_152 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_153 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_154 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_155 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_156 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_157 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_158 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_159 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_160 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_161 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_162 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_163 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_164 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_165 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_166 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_167 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_168 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_169 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_170 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_171 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_172 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_173 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_174 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_175 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_176 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_177 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_178 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_179 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_180 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_181 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_182 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_183 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_184 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_185 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_186 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_187 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_188 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_189 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_190 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_191 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_192 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_193 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_194 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_195 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_196 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_197 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_198 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_199 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_200 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_201 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_202 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_203 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_204 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_205 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_206 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_207 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_208 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_209 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_210 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_211 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_212 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_213 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_214 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_215 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_216 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_217 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_218 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_219 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_220 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_221 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_222 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_223 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_224 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_225 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_226 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_227 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_228 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_229 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_230 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_231 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_232 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_233 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_234 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_235 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_236 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_237 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_238 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
	}
	this.frame_239 = function() {
		this.ikNode_12 = undefined;this.ikNode_13 = undefined;this.ikNode_14 = undefined;this.ikNode_10 = undefined;this.ikNode_15 = undefined;this.ikNode_16 = undefined;this.ikNode_17 = undefined;this.ikNode_18 = undefined;this.ikNode_11 = undefined;this.ikNode_12 = this.Armature_3.ikNode_12;
		this.ikNode_13 = this.Armature_3.ikNode_13;
		this.ikNode_14 = this.Armature_3.ikNode_14;
		this.ikNode_10 = this.Armature_3.ikNode_10;
		this.ikNode_15 = this.Armature_3.ikNode_15;
		this.ikNode_16 = this.Armature_3.ikNode_16;
		this.ikNode_17 = this.Armature_3.ikNode_17;
		this.ikNode_18 = this.Armature_3.ikNode_18;
		this.ikNode_11 = this.Armature_3.ikNode_11;
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1).call(this.frame_80).wait(1).call(this.frame_81).wait(1).call(this.frame_82).wait(1).call(this.frame_83).wait(1).call(this.frame_84).wait(1).call(this.frame_85).wait(1).call(this.frame_86).wait(1).call(this.frame_87).wait(1).call(this.frame_88).wait(1).call(this.frame_89).wait(1).call(this.frame_90).wait(1).call(this.frame_91).wait(1).call(this.frame_92).wait(1).call(this.frame_93).wait(1).call(this.frame_94).wait(1).call(this.frame_95).wait(1).call(this.frame_96).wait(1).call(this.frame_97).wait(1).call(this.frame_98).wait(1).call(this.frame_99).wait(1).call(this.frame_100).wait(1).call(this.frame_101).wait(1).call(this.frame_102).wait(1).call(this.frame_103).wait(1).call(this.frame_104).wait(1).call(this.frame_105).wait(1).call(this.frame_106).wait(1).call(this.frame_107).wait(1).call(this.frame_108).wait(1).call(this.frame_109).wait(1).call(this.frame_110).wait(1).call(this.frame_111).wait(1).call(this.frame_112).wait(1).call(this.frame_113).wait(1).call(this.frame_114).wait(1).call(this.frame_115).wait(1).call(this.frame_116).wait(1).call(this.frame_117).wait(1).call(this.frame_118).wait(1).call(this.frame_119).wait(1).call(this.frame_120).wait(1).call(this.frame_121).wait(1).call(this.frame_122).wait(1).call(this.frame_123).wait(1).call(this.frame_124).wait(1).call(this.frame_125).wait(1).call(this.frame_126).wait(1).call(this.frame_127).wait(1).call(this.frame_128).wait(1).call(this.frame_129).wait(1).call(this.frame_130).wait(1).call(this.frame_131).wait(1).call(this.frame_132).wait(1).call(this.frame_133).wait(1).call(this.frame_134).wait(1).call(this.frame_135).wait(1).call(this.frame_136).wait(1).call(this.frame_137).wait(1).call(this.frame_138).wait(1).call(this.frame_139).wait(1).call(this.frame_140).wait(1).call(this.frame_141).wait(1).call(this.frame_142).wait(1).call(this.frame_143).wait(1).call(this.frame_144).wait(1).call(this.frame_145).wait(1).call(this.frame_146).wait(1).call(this.frame_147).wait(1).call(this.frame_148).wait(1).call(this.frame_149).wait(1).call(this.frame_150).wait(1).call(this.frame_151).wait(1).call(this.frame_152).wait(1).call(this.frame_153).wait(1).call(this.frame_154).wait(1).call(this.frame_155).wait(1).call(this.frame_156).wait(1).call(this.frame_157).wait(1).call(this.frame_158).wait(1).call(this.frame_159).wait(1).call(this.frame_160).wait(1).call(this.frame_161).wait(1).call(this.frame_162).wait(1).call(this.frame_163).wait(1).call(this.frame_164).wait(1).call(this.frame_165).wait(1).call(this.frame_166).wait(1).call(this.frame_167).wait(1).call(this.frame_168).wait(1).call(this.frame_169).wait(1).call(this.frame_170).wait(1).call(this.frame_171).wait(1).call(this.frame_172).wait(1).call(this.frame_173).wait(1).call(this.frame_174).wait(1).call(this.frame_175).wait(1).call(this.frame_176).wait(1).call(this.frame_177).wait(1).call(this.frame_178).wait(1).call(this.frame_179).wait(1).call(this.frame_180).wait(1).call(this.frame_181).wait(1).call(this.frame_182).wait(1).call(this.frame_183).wait(1).call(this.frame_184).wait(1).call(this.frame_185).wait(1).call(this.frame_186).wait(1).call(this.frame_187).wait(1).call(this.frame_188).wait(1).call(this.frame_189).wait(1).call(this.frame_190).wait(1).call(this.frame_191).wait(1).call(this.frame_192).wait(1).call(this.frame_193).wait(1).call(this.frame_194).wait(1).call(this.frame_195).wait(1).call(this.frame_196).wait(1).call(this.frame_197).wait(1).call(this.frame_198).wait(1).call(this.frame_199).wait(1).call(this.frame_200).wait(1).call(this.frame_201).wait(1).call(this.frame_202).wait(1).call(this.frame_203).wait(1).call(this.frame_204).wait(1).call(this.frame_205).wait(1).call(this.frame_206).wait(1).call(this.frame_207).wait(1).call(this.frame_208).wait(1).call(this.frame_209).wait(1).call(this.frame_210).wait(1).call(this.frame_211).wait(1).call(this.frame_212).wait(1).call(this.frame_213).wait(1).call(this.frame_214).wait(1).call(this.frame_215).wait(1).call(this.frame_216).wait(1).call(this.frame_217).wait(1).call(this.frame_218).wait(1).call(this.frame_219).wait(1).call(this.frame_220).wait(1).call(this.frame_221).wait(1).call(this.frame_222).wait(1).call(this.frame_223).wait(1).call(this.frame_224).wait(1).call(this.frame_225).wait(1).call(this.frame_226).wait(1).call(this.frame_227).wait(1).call(this.frame_228).wait(1).call(this.frame_229).wait(1).call(this.frame_230).wait(1).call(this.frame_231).wait(1).call(this.frame_232).wait(1).call(this.frame_233).wait(1).call(this.frame_234).wait(1).call(this.frame_235).wait(1).call(this.frame_236).wait(1).call(this.frame_237).wait(1).call(this.frame_238).wait(1).call(this.frame_239).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(275,200);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:273.2032,y:199.3798},0).wait(1).to({scaleX:0.9873,scaleY:0.9873,x:271.4063,y:198.7595},0).wait(1).to({scaleX:0.981,scaleY:0.981,x:269.6095,y:198.1392},0).wait(1).to({scaleX:0.9747,scaleY:0.9747,x:267.8127,y:197.519},0).wait(1).to({scaleX:0.9684,scaleY:0.9684,x:266.0158,y:196.8987},0).wait(1).to({scaleX:0.962,scaleY:0.962,x:264.219,y:196.2785},0).wait(1).to({scaleX:0.9557,scaleY:0.9557,x:262.4222,y:195.6582},0).wait(1).to({scaleX:0.9494,scaleY:0.9494,x:260.6253,y:195.038},0).wait(1).to({scaleX:0.943,scaleY:0.943,x:258.8285,y:194.4177},0).wait(1).to({scaleX:0.9367,scaleY:0.9367,x:257.0317,y:193.7975},0).wait(1).to({scaleX:0.9304,scaleY:0.9304,x:255.2348,y:193.1772},0).wait(1).to({scaleX:0.9241,scaleY:0.9241,x:253.438,y:192.557},0).wait(1).to({scaleX:0.9177,scaleY:0.9177,x:251.6411,y:191.9367},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:249.8443,y:191.3165},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,x:248.0475,y:190.6962},0).wait(1).to({scaleX:0.8987,scaleY:0.8987,x:246.2506,y:190.076},0).wait(1).to({scaleX:0.8924,scaleY:0.8924,x:244.4538,y:189.4557},0).wait(1).to({scaleX:0.8861,scaleY:0.8861,x:242.657,y:188.8354},0).wait(1).to({scaleX:0.8797,scaleY:0.8797,x:240.8601,y:188.2152},0).wait(1).to({scaleX:0.8734,scaleY:0.8734,x:239.0633,y:187.5949},0).wait(1).to({scaleX:0.8671,scaleY:0.8671,x:237.2665,y:186.9747},0).wait(1).to({scaleX:0.8608,scaleY:0.8608,x:235.4696,y:186.3544},0).wait(1).to({scaleX:0.8544,scaleY:0.8544,x:233.6728,y:185.7342},0).wait(1).to({scaleX:0.8481,scaleY:0.8481,x:231.876,y:185.1139},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,x:230.0791,y:184.4937},0).wait(1).to({scaleX:0.8354,scaleY:0.8354,x:228.2823,y:183.8734},0).wait(1).to({scaleX:0.8291,scaleY:0.8291,x:226.4854,y:183.2532},0).wait(1).to({scaleX:0.8228,scaleY:0.8228,x:224.6886,y:182.6329},0).wait(1).to({scaleX:0.8165,scaleY:0.8165,x:222.8918,y:182.0127},0).wait(1).to({scaleX:0.8101,scaleY:0.8101,x:221.0949,y:181.3924},0).wait(1).to({scaleX:0.8038,scaleY:0.8038,x:219.2981,y:180.7722},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:217.5013,y:180.1519},0).wait(1).to({scaleX:0.7911,scaleY:0.7911,x:215.7044,y:179.5317},0).wait(1).to({scaleX:0.7848,scaleY:0.7848,x:213.9076,y:178.9114},0).wait(1).to({scaleX:0.7785,scaleY:0.7785,x:212.1108,y:178.2911},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:210.3139,y:177.6709},0).wait(1).to({scaleX:0.7658,scaleY:0.7658,x:208.5171,y:177.0506},0).wait(1).to({scaleX:0.7595,scaleY:0.7595,x:206.7203,y:176.4304},0).wait(1).to({scaleX:0.7532,scaleY:0.7532,x:204.9234,y:175.8101},0).wait(1).to({scaleX:0.7468,scaleY:0.7468,x:203.1266,y:175.1899},0).wait(1).to({scaleX:0.7405,scaleY:0.7405,x:201.3298,y:174.5696},0).wait(1).to({scaleX:0.7342,scaleY:0.7342,x:199.5329,y:173.9494},0).wait(1).to({scaleX:0.7278,scaleY:0.7278,x:197.7361,y:173.3291},0).wait(1).to({scaleX:0.7215,scaleY:0.7215,x:195.9392,y:172.7089},0).wait(1).to({scaleX:0.7152,scaleY:0.7152,x:194.1424,y:172.0886},0).wait(1).to({scaleX:0.7089,scaleY:0.7089,x:192.3456,y:171.4683},0).wait(1).to({scaleX:0.7025,scaleY:0.7025,x:190.5487,y:170.8481},0).wait(1).to({scaleX:0.6962,scaleY:0.6962,x:188.7519,y:170.2279},0).wait(1).to({scaleX:0.6899,scaleY:0.6899,x:186.9551,y:169.6076},0).wait(1).to({scaleX:0.6835,scaleY:0.6835,x:185.1582,y:168.9873},0).wait(1).to({scaleX:0.6772,scaleY:0.6772,x:183.3614,y:168.3671},0).wait(1).to({scaleX:0.6709,scaleY:0.6709,x:181.5646,y:167.7468},0).wait(1).to({scaleX:0.6646,scaleY:0.6646,x:179.7677,y:167.1266},0).wait(1).to({scaleX:0.6582,scaleY:0.6582,x:177.9709,y:166.5063},0).wait(1).to({scaleX:0.6519,scaleY:0.6519,x:176.1741,y:165.8861},0).wait(1).to({scaleX:0.6456,scaleY:0.6456,x:174.3772,y:165.2658},0).wait(1).to({scaleX:0.6392,scaleY:0.6392,x:172.5804,y:164.6456},0).wait(1).to({scaleX:0.6329,scaleY:0.6329,x:170.7835,y:164.0253},0).wait(1).to({scaleX:0.6266,scaleY:0.6266,x:168.9867,y:163.4051},0).wait(1).to({scaleX:0.6203,scaleY:0.6203,x:167.1899,y:162.7848},0).wait(1).to({scaleX:0.6139,scaleY:0.6139,x:165.393,y:162.1646},0).wait(1).to({scaleX:0.6076,scaleY:0.6076,x:163.5962,y:161.5443},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,x:161.7994,y:160.9241},0).wait(1).to({scaleX:0.5949,scaleY:0.5949,x:160.0025,y:160.3038},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:158.2057,y:159.6835},0).wait(1).to({scaleX:0.5823,scaleY:0.5823,x:156.4089,y:159.0633},0).wait(1).to({scaleX:0.5759,scaleY:0.5759,x:154.612,y:158.443},0).wait(1).to({scaleX:0.5696,scaleY:0.5696,x:152.8152,y:157.8228},0).wait(1).to({scaleX:0.5633,scaleY:0.5633,x:151.0184,y:157.2025},0).wait(1).to({scaleX:0.557,scaleY:0.557,x:149.2215,y:156.5823},0).wait(1).to({scaleX:0.5506,scaleY:0.5506,x:147.4247,y:155.962},0).wait(1).to({scaleX:0.5443,scaleY:0.5443,x:145.6279,y:155.3418},0).wait(1).to({scaleX:0.538,scaleY:0.538,x:143.831,y:154.7215},0).wait(1).to({scaleX:0.5316,scaleY:0.5316,x:142.0342,y:154.1013},0).wait(1).to({scaleX:0.5253,scaleY:0.5253,x:140.2373,y:153.481},0).wait(1).to({scaleX:0.519,scaleY:0.519,x:138.4405,y:152.8608},0).wait(1).to({scaleX:0.5127,scaleY:0.5127,x:136.6437,y:152.2405},0).wait(1).to({scaleX:0.5063,scaleY:0.5063,x:134.8468,y:151.6203},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:133.05,y:151},0).wait(139).to({scaleX:0.5095,scaleY:0.5095,x:134.8659,y:152.9977},0).wait(1).to({scaleX:0.5191,scaleY:0.5191,x:136.6818,y:154.9955},0).wait(1).to({scaleX:0.5286,scaleY:0.5286,x:138.4977,y:156.9932},0).wait(1).to({scaleX:0.5382,scaleY:0.5382,x:140.3136,y:158.9909},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,x:142.1296,y:160.9886},0).wait(1).to({scaleX:0.5572,scaleY:0.5572,x:143.9455,y:162.9864},0).wait(1).to({scaleX:0.5668,scaleY:0.5668,x:145.7614,y:164.9841},0).wait(1).to({scaleX:0.5763,scaleY:0.5763,x:147.5773,y:166.9818},0).wait(1).to({scaleX:0.5858,scaleY:0.5858,x:149.3932,y:168.9796},0).wait(1).to({scaleX:0.5954,scaleY:0.5954,x:151.2091,y:170.9773},0).wait(1).to({scaleX:0.6049,scaleY:0.6049,x:153.025,y:172.975},0).wait(1).to({scaleX:0.6145,scaleY:0.6145,x:154.8409,y:174.9727},0).wait(1).to({scaleX:0.624,scaleY:0.624,x:156.6568,y:176.9705},0).wait(1).to({scaleX:0.6335,scaleY:0.6335,x:158.4727,y:178.9682},0).wait(1).to({scaleX:0.6431,scaleY:0.6431,x:160.2886,y:180.9659},0).wait(1).to({scaleX:0.6526,scaleY:0.6526,x:162.1046,y:182.9636},0).wait(1).to({scaleX:0.6622,scaleY:0.6622,x:163.9204,y:184.9614},0).wait(1).to({scaleX:0.6717,scaleY:0.6717,x:165.7364,y:186.9591},0).wait(1).to({scaleX:0.6812,scaleY:0.6812,x:167.5523,y:188.9568},0).wait(1).to({scaleX:0.6908,scaleY:0.6908,x:169.3682,y:190.9546},0).wait(1).to({scaleX:0.7003,scaleY:0.7003,x:171.1841,y:192.9523},0).wait(1).to({scaleX:0.7099,scaleY:0.7099,x:173,y:194.95},0).wait(1));

	// eyeball_obj_
	this.eyeball = new lib.Scene_1_eyeball();
	this.eyeball.name = "eyeball";
	this.eyeball.depth = 0;
	this.eyeball.isAttachedToCamera = 0
	this.eyeball.isAttachedToMask = 0
	this.eyeball.layerDepth = 0
	this.eyeball.layerIndex = 0
	this.eyeball.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eyeball).wait(165).to({regX:171.2,regY:127.9,x:171.2,y:127.9},0).wait(18).to({_off:true},1).wait(56));

	// eyeball_obj_
	this.eyeball_1 = new lib.Scene_1_eyeball_1();
	this.eyeball_1.name = "eyeball_1";
	this.eyeball_1.depth = 0;
	this.eyeball_1.isAttachedToCamera = 0
	this.eyeball_1.isAttachedToMask = 0
	this.eyeball_1.layerDepth = 0
	this.eyeball_1.layerIndex = 1
	this.eyeball_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eyeball_1).wait(216).to({_off:true},1).wait(23));

	// Armature_3_obj_
	this.Armature_3 = new lib.Scene_1_Armature_3();
	this.Armature_3.name = "Armature_3";
	this.Armature_3.depth = 0;
	this.Armature_3.isAttachedToCamera = 0
	this.Armature_3.isAttachedToMask = 0
	this.Armature_3.layerDepth = 0
	this.Armature_3.layerIndex = 2
	this.Armature_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Armature_3).wait(240));

	// shadow_obj_
	this.shadow = new lib.Scene_1_shadow();
	this.shadow.name = "shadow";
	this.shadow.depth = 0;
	this.shadow.isAttachedToCamera = 0
	this.shadow.isAttachedToMask = 0
	this.shadow.layerDepth = 0
	this.shadow.layerIndex = 3
	this.shadow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(240));

	// Cover_White_obj_
	this.Cover_White = new lib.Scene_1_Cover_White();
	this.Cover_White.name = "Cover_White";
	this.Cover_White.setTransform(275.6,201,1,1,0,0,0,275.6,201);
	this.Cover_White.depth = 0;
	this.Cover_White.isAttachedToCamera = 0
	this.Cover_White.isAttachedToMask = 0
	this.Cover_White.layerDepth = 0
	this.Cover_White.layerIndex = 4
	this.Cover_White.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cover_White).wait(240));

	// gem2_obj_
	this.gem2 = new lib.Scene_1_gem2();
	this.gem2.name = "gem2";
	this.gem2.setTransform(179.1,177.4,1,1,0,0,0,179.1,177.4);
	this.gem2.depth = 0;
	this.gem2.isAttachedToCamera = 0
	this.gem2.isAttachedToMask = 0
	this.gem2.layerDepth = 0
	this.gem2.layerIndex = 5
	this.gem2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.gem2).wait(218).to({_off:true},1).wait(21));

	// gem1_obj_
	this.gem1 = new lib.Scene_1_gem1();
	this.gem1.name = "gem1";
	this.gem1.setTransform(138.5,177.4,1,1,0,0,0,138.5,177.4);
	this.gem1.depth = 0;
	this.gem1.isAttachedToCamera = 0
	this.gem1.isAttachedToMask = 0
	this.gem1.layerDepth = 0
	this.gem1.layerIndex = 6
	this.gem1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.gem1).wait(240));

	// hut_obj_
	this.hut = new lib.Scene_1_hut();
	this.hut.name = "hut";
	this.hut.setTransform(271,151,1,1,0,0,0,271,151);
	this.hut.depth = 0;
	this.hut.isAttachedToCamera = 0
	this.hut.isAttachedToMask = 0
	this.hut.layerDepth = 0
	this.hut.layerIndex = 7
	this.hut.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hut).wait(240));

	// sand_obj_
	this.sand = new lib.Scene_1_sand();
	this.sand.name = "sand";
	this.sand.setTransform(274.9,320.5,1,1,0,0,0,274.9,320.5);
	this.sand.depth = 0;
	this.sand.isAttachedToCamera = 0
	this.sand.isAttachedToMask = 0
	this.sand.layerDepth = 0
	this.sand.layerIndex = 8
	this.sand.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sand).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.4,107.9,489.5,293.1);
// library properties:
lib.properties = {
	id: '7D9343F5E47080449EA5D3841B417681',
	width: 550,
	height: 400,
	fps: 24,
	color: "#00CCFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7D9343F5E47080449EA5D3841B417681'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;